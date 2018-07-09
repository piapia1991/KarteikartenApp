import React, {Component} from 'react';
import {LoginComponent} from './LoginComponent';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core'
import {MaterialIcon} from "../Helper/MaterialIcon";
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4fb3bf',
            main: '#00838f',
            dark: '#005662',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#7b5e57',
            main: '#4e342e',
            dark: '#260e04',
            contrastText: '#ffffff',
        },
        error: {
            light: '#ff0042',
            main: '#620033',
            dark: '#420022',
            contrastText: '#ffffff',
        },
        type:'dark',
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    overrides: {
        MuiButton: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                color: 'white', // Some CSS
            },
        },
        MuiTypography: { // Name of the component ⚛️ / style sheet
            title: { // Name of the rule
                color: 'white', // Some CSS
                align: 'justify',
                noWrap: 'true',
            },
            subheading: { // Name of the rule
                color: 'white', // Some CSS
                align: 'justify',
                noWrap: 'true',
            },
        },
    },
});

export class HeaderComponent extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static" className="Appbar" color="primary" >
                    <Toolbar>
                        <Grid container>
                            <Grid item lg={2} md sm={4}>
                                <MaterialIcon link={'/'} title={'Bearbeiten'} icon={'edit'} index={true}/>
                            </Grid>
                            <Grid item lg={2} md sm={4}>
                                <MaterialIcon link={'/learning'} title={'Lernen'} icon={'school'}/>
                            </Grid>
                            <Grid item lg={6} md  sm={4} classes='align-items-xs-center'>
                                <Typography variant="title">
                                    Karteikarten App
                                </Typography>
                            </Grid>
                            <Grid item lg={2} md={3} sm={12}>
                                <LoginComponent
                                    login={this.props.login}
                                    authenticate={this.props.authenticate}
                                    logout={this.props.logout}
                                />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        )
    };
}

