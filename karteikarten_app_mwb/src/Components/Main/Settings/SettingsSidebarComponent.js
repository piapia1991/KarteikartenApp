import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {List, ListItemText, ListItem} from '@material-ui/core';

export class SettingsSidebarComponent extends Component {
    render() {
        return(
            <List component="nav">
                <Link to={"/settings/profile"} style={{ textDecoration: 'none' }} >
                <ListItem button>
                    <ListItemText primary="Profil" />
                </ListItem>
                </Link>
                <Link to={"/settings/import"} style={{ textDecoration: 'none' }} >
                    <ListItem button>
                        <ListItemText primary="Karten Importieren" />
                    </ListItem>
                </Link>
            </List>
        )
    };
}

