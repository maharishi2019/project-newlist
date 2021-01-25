import React, { Component } from "react";
import firebase from "./Firebase";
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
                    <h1>Home</h1>
                    <div>
                        {
                            user ?
                                <div>
                                    <h1>Logged in as {user.displayName} </h1>
                                    <h1>Your email is {user.email}</h1>
                                </div>
                                :
                                <h1>Not Logged In</h1>
                        }
                    </div>
                </div >
            </div>
        );
    };
}