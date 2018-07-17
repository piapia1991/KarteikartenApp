import React, {Component} from 'react';
import {Icon, Typography, Button} from '@material-ui/core';

export class SettingsContentComponentProfile extends Component {
    render() {
        return(
            <React.Fragment>
                <Typography variant="title" className={'paddingTop-20'} >Profil Einstellungen</Typography>
                <Button onClick={() => this.props.deleteUser()}><Icon>delete</Icon>Mein Profil und alle Daten zu mir unwiderruflich löschen!</Button>
            </React.Fragment>
        )
    };
}

