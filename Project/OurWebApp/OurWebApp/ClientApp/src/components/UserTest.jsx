import React, { Component } from 'react';
import { BreakDownAPIClient, UserStub, UserRole, UserDetails } from './API/BreakDownApiClient';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { UserDetailView } from './UserDetailView'

export class UserTest extends Component {
    // ReSharper disable ExperimentalFeature
    static displayName = "User Management";

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            currentPage: 1,
            total: 0,
            itemsPerPage: 5,
            columns: [],
            curUserID: "Deadfault",
            showModal: false
        };
        // Any functions that are called in response to UI events must be bound here.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleRelativePageClick = this.handleRelativePageClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    componentDidMount() {
        //this.creatNewUser();
        this.getAllUsers();

        let cols = [{
            dataField: 'name',
            text: 'User Name'
        }, {
            dataField: 'role',
            text: 'User Role'
            }];
        this.setState({ columns: cols });
    }


    handleSubmit(event) {
        event.preventDefault();
    }

    currentUserView(userID) {

        return (

            <UserDetailView id={userID} onSubmit={this.handleClose}/>
        );
    }

    handleClose() {
        this.setState({ showModal: false });
        this.getAllUsers();
    }

    render() {
        let contents = this.state.loading ? <p><Spinner animation="border" size="lg" /></p>
            : this.renderUsersTable();

        return (
            <Container>
                
                {contents}


            </Container >
        );
    }

    // If we move the getPageButtons() to render(), this function could be made into a standalone stateless component.
    renderUsersTable() {
        const rowEvents = {

            onClick: (e, row, rowIndex) => {
                // e or row should have the ticket ID somewhere
                //TODO: curTicketID = rowTicketID

                console.log("Test row click, Index " + rowIndex);
                console.log(row);

                this.setState({ curUserID: row.userID, showModal: true });
            }

        };

        return (
            <Container>
                <Modal size="lg" centered show={this.state.showModal} onHide={this.handleClose}>
                    {this.currentUserView(this.state.curUserID)}
                </Modal>

                Basic user management.  Click on a row to 

                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <BootstrapTable keyField='userID' data={this.state.users} columns={this.state.columns} rowEvents={rowEvents} pagination={paginationFactory()} />
                </table>
            </Container>
        );
    }

    
    // The code above is what the component uses to make the table.
    //  Below is the prototype, which worked successfully. This was deprecated when I realized how simple BootStrapTable 
    //  would make this.
    // Preseved below as an example of making components with react-bootstrap, and to show that we did work out how to store 
    //  and display users using pagination buttons

    proto_renderUsersTable(users) {
        
        return (
            
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>UserID</th>
                    <th>Role</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr key={user.userID} >
                        <td>{user.userID}</td>
                        <td>{user.role}</td>
                        <td>{user.name}</td>
                    </tr>
                )}
                </tbody>
                {this.getPageButtons()}

            </table>
        );

    }


    // Handle clicking on a page number
    handlePageClick(event) {
        let page = Number(event.target.id);
        this.setState({ currentPage: page, });

    }

    // Handle clicking on the Prev and Next buttons.
    handleRelativePageClick(event) {
        let pageOffset = Number(event.target.id);
        let newPage = this.state.currentPage + pageOffset;
        let totalPages = Math.ceil(this.state.total / this.state.itemsPerPage);
        if (newPage > 0 && newPage <= totalPages) {
            this.setState({ currentPage: newPage });
        }
    }


    getPageButtons() {
        let totalPages = Math.ceil(this.state.total / this.state.itemsPerPage);

        return (
            <Pagination>
                <Pagination.First key={0} active={false} onClick={this.handlePageClick} id={1} />
                <Pagination.Prev key={1} active={false} onClick={this.handleRelativePageClick} id={-1} />
                {
                    // This is a little hacky, but effectively equates to:   for(i = 0; i < totalPages; i++)
                    // Apparently the only way to loop in inside JSX is to iterate over a collection.  
                    [...Array(totalPages)].map((e, i) => (
                        <Pagination.Item key={i + 2} active={(i + 1) === this.state.currentPage} onClick={this.handlePageClick} id={i + 1}>
                            {i + 1}
                        </Pagination.Item>
                    ))
                }
                <Pagination.Next key={totalPages + 2} active={false} onClick={this.handleRelativePageClick} id={1} />
                <Pagination.Last key={totalPages + 3} active={false} onClick={this.handlePageClick} id={totalPages} />
            </Pagination>
        );
    }

    // End of obsolete code



    // Returns the subset of users to display based on currentPage and itemsPerPage.
    getCurrentUsers() {
        let currentUsers = [];
        let offset = (this.state.currentPage - 1) * this.state.itemsPerPage
        let end = offset + this.state.itemsPerPage;
        if (offset > this.state.users.length) {
            offset = this.state.users.length;
        }

        return this.state.users.slice(offset, end);
    }

    // Calls the API:  Typescript class absracts away the Get:/users/ request and returns an array of UserStub objects.
    async getAllUsers() {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();

        // REquest all users from DB
        client.getUsers()
            .then(data => {
                this.setState({ users: data, loading: false, total: data.length});
            });

    }

    


}
