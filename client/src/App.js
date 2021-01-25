import React, { Component } from "react";

//import of firebase (database)
import { FirebaseDatabaseProvider } from "@react-firebase/database";

//import of routing libraries
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

import firebase from "./Firebase";

//import of react routing bootstrap
import {
    LinkContainer
} from "react-router-bootstrap";

//import of bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import of react components
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <FirebaseDatabaseProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" exact component={Home} />
                        <Route exact path="/login" exact component={Login} />
                        <Route exact path="/signup" exact component={Signup} />
                    </Switch>
                </Router >
            </FirebaseDatabaseProvider>
        );
    };
}

export default App; 