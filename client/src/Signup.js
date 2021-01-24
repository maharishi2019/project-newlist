import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "./Firebase";
import "firebase/auth";
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import Home from "./Home";

class TraditionalSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', confirmpassword: '' };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirmpassword: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        if (this.state.password === this.state.confirmpassword) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((user) => {
                    // Signed in 
                    // ...
                    this.props.handleSuccessfulAuth();
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                });
        } else {
            alert("Confirm password doesn't match password");
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.handleEmailChange} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handlePasswordChange} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="confirmpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange} required></Form.Control>
                    </Form.Group>
                    <Button type="submit">Signup</Button>
                </Form>
            </div>
        );
    };
}
export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <TraditionalSignup handleSuccessfulAuth={this.handleSuccessfulAuth} />
        );
    };
}