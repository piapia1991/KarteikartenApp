import React, {Component, Fragment} from 'react';
import {Avatar, Typography, Grid, Button, IconButton, Icon, Tooltip, Hidden} from '@material-ui/core';
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
                        <Hidden only={['xs', 'sm', 'md']}>
                            <Grid item xs={7}/>
                        </Hidden>
                        <Grid item xs={3} lg={8}>
                            <Grid container>
                                <Grid item sm={8}>
                                    <Typography variant="subheading" gutterBottom noWrap
                                                className="paddingTop-10">{this.props.login.name}</Typography>
                                </Grid>
                                <Grid item sm={4}>
                                    <Avatar className="marginTop-3" alt="this.props.login.name" id="loginPicture"
                                            src={this.props.login.picture}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} lg={2}>
                            <Tooltip id="tooltip-fab" title="Logout">
                                <IconButton onClick={() => this.props.logout()}>
                                    <Icon className="exit_to_app">
                                        exit_to_app
                                    </Icon>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={1} lg={2}>
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
