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

//import of react bootstrap functionalities
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

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

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" class=".navbar-custom" variant="light" sticky="top" >
                        <Navbar.Brand href="/">NewList</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Switch>
                    <Route exact path="/" exact component={Home} />
                    <Route exact path="/login" exact component={Login} />
                    <Route exact path="/signup" exact component={Signup} />
                </Switch>
            </Router >
        );
    };
}

export default App; 