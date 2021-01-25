import React, { Component } from "react";
import firebase from "./Firebase";

//import of react bootstrap functionalities
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

export default class NavBar extends Component {

    signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.props.handleSuccessfulSignOut();
        }).catch((error) => {
            // An error happened.
        });
    }

    render() {
        var user = firebase.auth().currentUser;
        return (
            <Navbar collapseOnSelect expand="lg" class=".navbar-custom" variant="light" sticky="top" >
                <Navbar.Brand href="/">NewList</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user ?
                        <Nav className="mr-auto">
                            <Navbar.Text>
                                Signed in as: {user.email}
                            </Navbar.Text>
                            <Button onClick={this.signOut}>Sign Out</Button>
                        </Nav>
                        :
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        );
    };
}