import React, { Component } from 'react';
import { BreakDownAPIClient, UserStub, UserRole, TicketStub, Location} from './API/BreakDownApiClient';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck'
import { AppUser } from '../utils/userUtils'

import { Auth0Context } from "../react-auth0-spa";

export class TicketForm extends Component {
    static displayName = TicketForm.name;
    static contextType = Auth0Context;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            modelList: [],
            makeList: [],
            startYear: 1984,
            endYear: 2021,
            selectedYear: "",
            selectedModel: "",
            selectedMake: "",
            address: "",
            customerName: "",
            issue: "",
            newTicket: "",
            userStub: "",
        };
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMakeChange = this.handleMakeChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleIssueChange = this.handleIssueChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //var userName = authGetUser();
        var AU = new AppUser();

        var userID = "UserID1";

        if (this.context.isAuthenticated) {
            console.log("I am logged in");
            userID = this.context.user.sub;
        } 


        //TODO: get auth0 user details.
        // Hardcoded userID, should be the Auth0Context's data.
        AU.getUserDetails(userID)
            .then(data => {
                console.log(data);
                this.setState({ newTicket: new TicketStub(), selectedYear: 2021, userStub: data, customerName: data.name });
            });

    }
    
    handleYearChange(event) {

        this.getMakes(event.target.value);
    }

    handleMakeChange(event) {
        this.getModels(this.state.selectedYear, event.target.value);
    }
    handleNameChange(event) {
        this.setState({ customerName: event.target.value });
    }
    handleModelChange(event) {
        this.setState({ selectedModel: event.target.value });
    }

    handleAddressChange(event) {
        this.setState({ address: event.target.value });
    }
    handleIssueChange(event) {
        this.setState({ issue: event.target.value });
    }

    handleSubmit(event) {
        
        // TODO: GET USER FROM AUTH.  Need sub and name.
        event.preventDefault();
        this.createTicket();
        this.props.onSubmit();

    }
        // Validate input
        // - If failed, highlight the missing info in a red box.

        // Get UserStub for current user.
        // Build Ticket from provided info
        // Send TicketStub to Server
        // If sucessful, close the modal containing this form.

    
    // TODO: Change form HMTL to react bootstrap components.
    render() {
        return (
 
            <Container>
                
                    <p>Please provide the following information:</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            
                            <label>
                                Address<input className="form-control" onChange={this.handleAddressChange} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Year/Make/Model
                                <select className="form-control" onChange={this.handleYearChange}>
                                    {this.yearOptions()}
                                </select>
                                <select className="form-control" onChange={this.handleMakeChange}>
                                    {this.vehicleMakeOptions()}
                                </select>
                                <select className="form-control" onChange={this.handleModelChange}>
                                    {this.vehicleModelOptions()}
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>Issues</label>
                            <input className="form-control" type="text" onChange={this.handleIssueChange}/>
                        </div>
                    <button className="btn btn-primary" type="submit" >Submit Ticket</button>
                        </form>

            </Container >
        );
    }


   
    
    yearOptions() {
        //let offset = new Date().getFullYear();
        let offset = 2021;

        return(
            <optgroup label="year">
            {
                [...Array(38)].map(( e, i) => (
                    <option key={offset - i} selected="">{offset - i}</option>
                )
            )}
            </optgroup>
        );
    }

    vehicleMakeOptions() {
        if (this.state.selectedYear == '') {
            return (
                <optgroup label="make">

                </optgroup>  
            );
        }
        return (
            <optgroup label="make">
                {this.state.makeList.map((e, i) => (
                    <option key={i} value={e} selected="">{e}</option>
                )
                )}
            </optgroup>
        );
    }

    vehicleModelOptions() {
        if (this.state.selectedMake == '') {
            return (
                <optgroup label="make">

                </optgroup>
            );
        }
        return (
            <optgroup label="model">
                {this.state.modelList.map((e, i) => (
                    <option key={i} value={e} selected="">{e}</option>
                )
                )}
            </optgroup>
        );
    }

    

    async getMakes(year) {
        
        let route = 'https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=' + year;
        
        let _makeList = await this.getFEGData(route);
        
        //console.dir(_makeList);

        this.setState({
            makeList: _makeList, 
            selectedYear: year,
        });
    }

    // 
    async getModels(year, make) {

        let route = 'https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=';
        route = route + year + '&make=' + make;

        let _modelList = await this.getFEGData(route);


        //console.dir(_modelList);

        this.setState({
            modelList: _modelList,
            selectedMake: make,
        });
    }


    // Call an API on FuelEconomony.Gov and parse the results into an array/
    async getFEGData(route) {

        const response = await fetch(route)
            .catch((error) => {
                console.error(error);
            });
        const data = await response.text();
        //console.log(data);

        var parseString = require('xml2js').parseString;
        var jsonObject;
        parseString(data, function (err, result) {
            //console.dir(result);
            jsonObject = result;
        });

        let _return = [];
        for (var item in jsonObject.menuItems.menuItem) {
            //console.log(jsonObject.menuItems.menuItem[item]);
            _return.push(jsonObject.menuItems.menuItem[item].value[0]);
        }

        return _return;
    }



    async createTicket() {
        let client = new BreakDownAPIClient();
        var ticket = new TicketStub

        ticket.customer = this.state.userStub;
        ticket.serviceType = this.state.issue;
        let address = new Location();
        address.street = this.state.address;

        ticket.serviceLocation = address;
        //console.log("Ticket");
        //console.log(ticket);
        await client.addTicket(ticket);

    }

}
