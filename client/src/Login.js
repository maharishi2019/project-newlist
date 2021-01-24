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

class GoogleLogin extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                var user = result.user;
                console.log(user);

                this.props.handleSuccessfulAuth();
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                alert(errorMessage);
            });
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.onSubmit}>
                    Google Login
                </button>
            </div>
        );
    };
}

class TraditionalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                // Signed in 
                // ...
                this.props.handleSuccessfulAuth();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
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
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        );
    };
}

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth = () => {
        console.log("doing this");
        this.props.history.push("/");
        console.log("hopefully should have redirected");
    }

    render() {
        return (
            <div>
                <GoogleLogin handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <TraditionalLogin handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    };
}