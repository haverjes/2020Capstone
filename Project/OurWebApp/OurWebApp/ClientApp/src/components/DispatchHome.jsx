import React, { Component, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { BreakDownAPIClient, TicketStub, TicketDetails, UserDetails, UserStub } from './API/BreakDownApiClient';
import { TicketForm } from './TicketForm';
import NewTicketModal from './NewTicketModal'
import { TicketDetailView } from './TicketDetailView'


/*
 * This is the screen a customer sees when after log in.
 *
 *  Primary feature requirements
 *  - User can create a new ticket from here
 *      - Add a button that opens a modal for the form
 *
 *  - User can see stats related to a currently open ticket.
 *  
 */

export class DispatchHome extends Component {
    static displayName = "Dashboard";

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            loading: true,
            users: [],
            currentPage: 1,
            total: 0,
            itemsPerPage: 5,
            columns: [],
            curTicketID: "Deadfault",
            showModal: false
        };
        this.handleClose = this.handleClose.bind(this);
    }


    componentDidMount() {
        // Anything that needs to be configured or generated at the begininning of the component's lifecycle goes here
        // For example, this page could start by getting open tickets from the API and saving the result into the state.

        this.getAllTickets();
        //this.getAllUsers();
        let cols = [{
            dataField: 'customer.name',
            text: 'Name'

        }, {
            dataField: 'serviceLocation.street',
            text: 'Location'
        }, {
            dataField: 'serviceType',
            text: 'Service'
        }];
        this.setState({ columns: cols });
    }




    /*
     * I'm picturing a simple pane that shows a table of ticket stats if there is an open ticket
     * Else, a button that clearly indicates it is for creating a new request should be front and center.
     * 
     */
    render() {
        let contents = this.state.loading ? <p><Spinner animation="border" size="lg" /></p>
            : this.renderTicketsTable(this.state.tickets);

        return (
            <div>
                {contents}



            </div >
        );
    }


    currentTicketView(ticketID) {

        return (
            <TicketDetailView id={ticketID} onSubmit={this.handleClose}/>
        );
    }

    //onClick(e, row, rowIndex)  {
    //    console.log("Test row click, Index " + rowIndex);
    //    console.log(row);
    //    this.setState({ showModal: true, curTicketID: row.ticketID });
    //}
    handleClose() {
        this.setState({ showModal: false });
        this.getAllTickets();
    }

    renderTicketsTable(tickets) {


        const rowEvents = {

            onClick: (e, row, rowIndex) => {
                // e or row should have the ticket ID somewhere
                //TODO: curTicketID = rowTicketID

                console.log("Test row click, Index " + rowIndex);
                console.log(row);

                this.setState({ curTicketID: row.ticketID, showModal: true });
            }

        };

        return (
            <div>

                <NewTicketModal />
                <Modal size="lg" centered show={this.state.showModal} onHide={this.handleClose}>
                    {this.currentTicketView(this.state.curTicketID)}

                </Modal>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <BootstrapTable keyField='ticketID' data={this.state.tickets} columns={this.state.columns} rowEvents={rowEvents} pagination={paginationFactory()} />
                </table>
            </div>

        );

    }

    async getAllTickets() {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();

        // Request all users from DB
        client.search_Tickets()
            .then(data => {
                this.setState({ tickets: data, loading: false, total: data.length });
            });
    }




}
