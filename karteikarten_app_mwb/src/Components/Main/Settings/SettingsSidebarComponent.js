import React, {Component} from 'react';
import {List, ListItemText, ListItem} from '@material-ui/core';

export class SettingsSidebarComponent extends Component {
    render() {
        return(
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Profil" />
                </ListItem>
            </List>
        )
    };
}

