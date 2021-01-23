import React, { Component } from "react";
import firebase from "./Firebase";
import "firebase/auth";

class GoogleLogin extends Component {
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
            });
    }
    render() {
        return (
            <button type="button" onClick={this.onSubmit}>
                Google Login
            </button>
        );
    };
}

export default function Login() {
    return (
        <GoogleLogin />
    );
}