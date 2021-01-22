import React from "react";

//import of firebase (database)
import { FirebaseDatabaseProvider } from "@react-firebase/database";

//import of routing libraries
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link
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

export default function App() {
    return (
        <FirebaseDatabaseProvider>
            <Router>
                <ul>
                    <li>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </li>
                    <li>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </Router >
        </FirebaseDatabaseProvider>
    );
}
