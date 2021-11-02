import React, { useState, Component } from 'react';
// import API
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { BreakDownAPIClient, TicketStub, TicketDetails, UserDetails, UserStub } from './API/BreakDownApiClient';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Highlight from "./Highlight";
import { AppUser } from "../utils/userUtils";


import Spinner from 'react-bootstrap/Spinner';

export class UserDetailView extends Component {
    static displayName = "UserDetailView";

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: ""
        };

        this.onUpdate = this.onUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.getUserDetails();

        //console.log("StartModal: " + JSON.stringify(this.state.ticket, null, 2));
    }

    onUpdate(event) {

        event.preventDefault();
        //console.log("UpdateModal: " + JSON.stringify(this.state.user, null, 2));
        this.updateUser(this.state.user)
            .then(() => { this.props.onSubmit(); }
            );
        // something else to tell the user 
        
    }

    handleChange(event) {
 
        event.preventDefault();
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        this.setState({ user: { ...this.state.user, [fieldName]: fieldVal}})
    }

    

    render() {

        let contents = this.state.loading ? <Spinner animation="border" size="lg" />
            : this.renderContents();

        return (
            <div>
                
                {contents}
                
           </div> 

            
        );
    }


    renderContents() {
        //var CustName = this.state.ticket.customer.name;
        //var street = this.state.ticket.serviceLocation.street;
        
        return (
            <Container>
               
                
                <Form onSubmit={this.onUpdate}>
                    
                    <Form.Row>
                        <Form.Group >
                            <Form.Label>Date Joined</Form.Label>
                            <Form.Control readOnly={true} defaultValue={this.state.user.dateCreated} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Login</Form.Label>
                            <Form.Control readOnly={true} type="text" defaultValue={this.state.user.dateActive} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Label>User ID</Form.Label>
                        <Form.Control readOnly={true} defaultValue={this.state.user.userID} name='userID' onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={this.state.user.name} name='name' onChange={this.handleChange.bind(this)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        
                        <Form.Control as="select" name='role' defaultValue={this.state.user.role} onChange={this.handleChange.bind(this)}>
                            <option>Driver</option>
                            <option>Customer</option>
                            <option>Dispatch</option>
                        </Form.Control>
                    </Form.Group>

                    

                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                
                </Form >
            </Container>
            );
    }



    async getUserDetails() {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();

        // Request all users from DB
        await client.getUserDetails(this.props.id)
            .then(data => {
                this.setState({ user: data, loading: false });
            });

    }

    async updateUser(userDetails) {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();
        //console.log("Updating");
        //console.log(userDetails);
        // Request all users from DB
        return await client.updateUserDetails(userDetails, userDetails.userID);

    }




}
