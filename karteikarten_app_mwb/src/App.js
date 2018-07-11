import React, {Component} from 'react';
import './App.css';
import {HeaderComponent} from "./Components/Header/HeaderComponent";
import {MainComponent} from "./Components/Main/MainComponent";
import {Grid, MuiThemeProvider} from '@material-ui/core';

import base, {firebaseApp} from './base';
import firebase from "firebase/app";
import {createMuiTheme} from "@material-ui/core/styles/index";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4fb3bf',
            main: '#00838f',
            dark: '#005662',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#fffffb',
            main: '#d7ccc8',
            dark: '#a69b97',
            contrastText: '#000000',
        },
        error: {
            light: '#ff0042',
            main: '#620033',
            dark: '#420022',
            contrastText: '#ffffff',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

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

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Grid container xs={12}>
                        <Grid item xs>
                            <HeaderComponent
                                login={this.state.login}
                                authenticate={this.authenticate}
                                logout={this.logout}
                            />
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item xs>
                            {mainComponent}
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </div>
        )
    };
}

export default App;
