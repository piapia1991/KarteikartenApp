import React, {Component, Fragment} from 'react';
import {Avatar, Typography, Grid, Button, IconButton, Icon, Tooltip} from '@material-ui/core';
import {Link} from 'react-router-dom';

export class LoginComponent extends Component {
    render() {
        if (this.props.login == null) {
            return (
                <Button onClick={() => this.props.authenticate()}>Sign in</Button>
            );
        } else {
            return (
                <Fragment>
                    <Grid container>
                        <Grid item xs={10} className="paddingTop-15">
                            <Grid container>
                                <Grid item sm={10} className="paddingTop-5">
                                    <Typography variant="subheading" gutterBottom noWrap>{this.props.login.name}</Typography>
                                </Grid>
                                <Grid item sm={2}>
                                    <Avatar alt="this.props.login.name" id="loginPicture"
                                            src={this.props.login.picture}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className="paddingTop-10">
                            <Tooltip id="tooltip-fab" title="Logout">
                                <IconButton onClick={() => this.props.logout()}>
                                    <Icon className="exit_to_app">
                                        exit_to_app
                                    </Icon>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={1} className="paddingTop-10">
                            <Tooltip id="tooltip-fab" title="Einstellungen">
                                <Link to={"/settings"}>
                                    <IconButton to={"/settings"}>
                                        <Icon className="settings">
                                            settings
                                        </Icon>
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Fragment>
            );
        }
    };
}
