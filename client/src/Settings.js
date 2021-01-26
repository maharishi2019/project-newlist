import React, { Component } from "react";
import firebase from "./Components/Firebase/firebase";
import { Form, Button, Nav } from "react-bootstrap";
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom"

import NavBar from "./NavBar";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulSignOut = this.handleSuccessfulSignOut.bind(this);
    }

    handleSuccessfulSignOut = () => {
        console.log("running this");
        this.props.history.push("/");
    }

    render() {
        var user = firebase.auth().currentUser;
        return (
            <div>
                <NavBar handleSuccessfulSignOut={this.handleSuccessfulSignOut} />
                <div class="home-body">
                    <div>
                        {
                            <h1>Settings for {user.email}</h1>
                        }
                    </div>
                </div >
            </div>
        );
    };
}