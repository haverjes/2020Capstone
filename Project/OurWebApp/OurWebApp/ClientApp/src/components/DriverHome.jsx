import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import 'bootstrap/dist/css/bootstrap.min.css';

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

export class DriverHome extends Component {
    static displayName = "Dashboard";

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            loading: true,
        };
        // Any functions that are called in response to UI events must be bound here.
        
    }


    componentDidMount() {
        // Anything that needs to be configured or generated at the begininning of the component's lifecycle goes here
        // For example, this page could start by getting open tickets from the API and saving the result into the state.
    }


    /*
     * I'm picturing a simple pane that shows a table of ticket stats if there is an open ticket
     * Else, a button that clearly indicates it is for creating a new ruest should be front and center.
     * 
     */
    render() {
        let contents = this.state.loading ? <p><Spinner animation="border" size="lg" /></p>
            : <h1>Something goes here when things have loaded.</h1>;

        return (
            <div>
                {contents}

                

            </div >
        );
    }

    

    



}
