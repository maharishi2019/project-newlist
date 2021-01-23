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

class HomeUI extends Component {
    state = { loggedIn: true, user: null };
    componentDidMount = () => {
        var user = firebase.auth().currentUser;

        if (user) {
            this.setState({ loggedIn: true });
        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    render() {
        var user = firebase.auth().currentUser;
        return (
            <div>
                {
                    this.state.loggedIn === true && user ?
                        <div>
                            <h1>Logged in as {user.displayName} </h1>
                            <h1>Your email is {user.email}</h1>
                            <button onClick={this.signOut}>Sign Out</button>
                        </div>
                        :
                        <h1>Not Logged In</h1>
                }
            </div>
        );
    };
}

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <HomeUI />
        </div>
    );
}