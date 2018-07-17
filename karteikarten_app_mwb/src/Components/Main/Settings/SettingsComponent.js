import React, {Component} from 'react';
import {SettingsContentComponent} from "./SettingsContentComponent";
import {SettingsSidebarComponent} from "./SettingsSidebarComponent";
import {Grid} from '@material-ui/core';

export class SettingsComponent extends Component {
    render() {
        return(
                <Grid container  className={'main'}>
                    <Grid item xs={12} md={3} lg={2}>
                        <SettingsSidebarComponent/>
                    </Grid>
                    <Grid item xs={12} md={9} lg={10}>
                        <SettingsContentComponent  deleteUser={this.props.deleteUser}/>
                    </Grid>
                </Grid>
        )
    };
}

