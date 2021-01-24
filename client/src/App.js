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
                    <Route exact path="/" exact component={Home} />
                    <Route exact path="/login" exact component={Login} />
                    <Route exact path="/signup" exact component={Signup} />
                </Switch>
            </Router >
        );
    };
}

export default App; 