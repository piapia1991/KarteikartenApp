import React, {Component} from 'react';
import './App.css';
import {HeaderComponent} from "./Components/Header/HeaderComponent";
import {MainComponent} from "./Components/Main/MainComponent";
import {Grid} from '@material-ui/core';

import base, {firebaseApp} from './base';
import firebase from "firebase/app";

class App extends Component {

    state = {
        login: null
    };

    authenticate = async () => {
        try {
            const authProvider = new firebase.auth[`GoogleAuthProvider`]();
            const authData = await firebaseApp
                .auth()
                .signInWithPopup(authProvider);
            this.authHandler(authData);
        } catch (e) {
            console.log("authenticate exception:", e);
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
            );
        } catch (e) {
            console.log("authHandler exception:", e);
        }
    };

    logout = async () => {
        try {
            console.log("Logging out!");
            await firebase.auth().signOut();
            this.setState({
                login: null
            });
            base.removeBinding(this.folderRef);
        } catch (e) {
            console.log("logout exception:", e);
        }
    };

    deleteUser = async () => {
        try {
            console.log("Delete User!");
            await firebase.auth().currentUser.delete();
            this.setState({
                login: null
            });
        } catch (e) {
            console.log("deleteUser exception:", e);
        }
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({user});
            }
        });
    }


    render() {
        var mainComponent = <div></div>;
        if(this.state.login !== undefined && this.state.login !== null){
            mainComponent = <MainComponent uid={this.state.login.uid} deleteUser={this.deleteUser}/>;
        }

        return (<div className="App">
                <Grid container>
                    <Grid item xs>
                        <HeaderComponent
                            login={this.state.login}
                            authenticate={this.authenticate}
                            logout={this.logout}
                        />
                    </Grid>
                </Grid>
                {<Grid container>
                    <Grid item xs={12}>
                        {mainComponent}
                    </Grid>
                </Grid>}
            </div>

        )
    };
}

export default App;
