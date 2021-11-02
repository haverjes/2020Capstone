import React, { Component } from 'react';

import { Auth0Context } from "../react-auth0-spa";

import {
    Collapse,
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Button,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from './Login';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;
    static contextType = Auth0Context;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
       
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Breakdown: Roadside Services</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            

                            {((this.context.user == null || this.context.user.role == "Visitor") && this.context.debugUsers == "1") && (
                                <ul className="navbar-nav flex-grow">
                                        <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/CustHome">Customer</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/DispatchHome">Dispatcher</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/userMan">User Management</NavLink>
                                        </NavItem>
                                </ul>)}
                                {(this.context.user != null && this.context.user.role == "Customer") && (
                                    <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/CustHome">Customer</NavLink>
                                    </NavItem></ul>
                                )}
                                {(this.context.user != null && this.context.user.role == "Dispatcher") && (
                                    <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/DispatchHome">Dispatcher</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/userMan">User Management</NavLink>
                                    </NavItem></ul>
                                    )}
                                
                            
                        </Collapse>
                        <Login />
                           
                    </Container>
                </Navbar>
            </header>
        );
    }
}
