import React, {Component} from 'react';
import './App.css';
import {HeaderComponent} from "./Components/HeaderComponent";
import {MainComponent} from "./Components/MainComponent";

import base, {firebaseApp} from './base'
import firebase from "firebase/app";

class App extends Component {

    state = {
        login: null
    };

    authenticate = async ()  => {
        try {
            const authProvider = new firebase.auth[`GoogleAuthProvider`]();
            const authData = await firebaseApp
                .auth()
                .signInWithPopup(authProvider);
            this.authHandler(authData);
        } catch (e) {
            console.log("authenticate exception:",e);
        }
    };

    authHandler = async (authData) => {
        try {
            this.setState(
                {
                    login: {
                        uid: authData.user.uid,
                        email: authData.user.email,
                        name: authData.user.displayName,
                        picture: authData.user.photoURL
                    }
                }
            )
        } catch (e) {
            console.log("authHandler exception:",e);
        }
    };

    logout = async () => {
        try {
            console.log("Logging out!");
            await firebase.auth().signOut();
            this.setState({
                login: null
            });
        } catch (e) {
            console.log("logout exception:",e);
        }
    };

    deleteUser = async () => {
        try{
            console.log("Delete User!");
            await firebase.auth().currentUser.delete();
            this.setState({
                login: null
            });
        } catch (e) {
            console.log("deleteUser exception:",e);
        }
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        });
    }

    render() {
        return (<div className="App">
                <HeaderComponent
                    login={this.state.login}
                    authenticate={this.authenticate}
                    logout={this.logout}
                    deleteUser={this.deleteUser}
                />
                <MainComponent/>
            </div>

        )
    };
}

export default App;
