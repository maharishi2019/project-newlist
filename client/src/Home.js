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

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.props.history.push("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    render() {
        var user = firebase.auth().currentUser;
        return (
            <div>
                <h1>Home</h1>
                <div>
                    {
                        user ?
                            <div>
                                <h1>Logged in as {user.displayName} </h1>
                                <h1>Your email is {user.email}</h1>
                                <button onClick={this.signOut}>Sign Out</button>
                            </div>
                            :
                            <h1>Not Logged In</h1>
                    }
                </div>
            </div >
        );
    };
}