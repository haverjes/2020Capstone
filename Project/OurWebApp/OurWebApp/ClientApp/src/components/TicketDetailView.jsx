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
import Highlight from "../components/Highlight";

import Spinner from 'react-bootstrap/Spinner';

export class TicketDetailView extends Component {
    static displayName = "TicketDetailView";

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            ticket: ""
        };

        this.onUpdate = this.onUpdate.bind(this);
    }


    componentDidMount() {
        this.getTicketDetails();

        //console.log("StartModal: " + JSON.stringify(this.state.ticket, null, 2));
    }

    onUpdate(event) {
        //console.log("UpdateModal: " + JSON.stringify(this.state.ticket, null, 2));
        event.preventDefault();
        this.updateTicket(this.state.ticket)
            .then(() => { this.props.onSubmit(); }
            );
    }

    handleChange(event) {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        this.setState({ticket: {...this.state.ticket, [fieldName]: fieldVal}})
    }

    render() {
        

        let nTicket = this.state.ticket;
        let contents = this.state.loading ? <Spinner animation="border" size="lg" />
            : this.renderContents();

        return (
            <div>
                {contents}
                
           </div> 

            
        );
    }


    renderContents() {
        var CustName = this.state.ticket.customer.name;
        var street = this.state.ticket.serviceLocation.street;
        
        return (
            <Container>
               
                
                <Form onSubmit={this.onUpdate}>
                    
                    <Form.Row>
                    <Form.Group >
                        <Form.Label>Date Created</Form.Label>
                        <Form.Control readOnly={true}  value={this.state.ticket.dateCreated} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Update</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.state.ticket.dateUpdated} />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                        <Form.Control readOnly={true} defaultValue={CustName} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Address</Form.Label>
                        <Form.Control readOnly={true} defaultValue={street} />
                </Form.Group>

                <Form.Row>
                    <Form.Group>
                        <Form.Label>Service Type</Form.Label>
                            <Form.Control defaultValue={this.state.ticket.serviceType} name='serviceType' onChange={this.handleChange.bind(this)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                            <Form.Control name='status' as="select" defaultValue={this.state.ticket.status} onChange={this.handleChange.bind(this)}>
                            <option>Pending</option>
                            <option>Closed</option>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>

                <Form.Group>
                    <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows="6" defaultValue={this.state.ticket.comments} name='comments' onChange={this.handleChange.bind(this)}/>
                </Form.Group>
                    <Button variant="primary" type="submit" >
                    Save Changes
                    </Button>
                
                </Form >
            </Container>
            );
    }



    async getTicketDetails() {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();

        // Request all users from DB
        await client.getTicketDetails(this.props.id)
            .then(data => {
                this.setState({ ticket: data, loading: false});
            });

    }

    async updateTicket(ticketDetails) {
        // Create instance of the API Client
        let client = new BreakDownAPIClient();
        console.log(ticketDetails);
        // Request all users from DB
        return await client.updateTicketDetails(ticketDetails, ticketDetails.ticketID);

    }




}
