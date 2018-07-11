import React, {Component} from 'react';
import {Icon} from '@material-ui/core';

export class SettingsContentComponent extends Component {
    render() {
        return(
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Settings</h1>
                </div>
                <button className="px-1 d-flex align-items-center" onClick={() => this.props.deleteUser()}><Icon>delete</Icon>Mein Profil und alle Daten zu mir unwiderruflich löschen!</button>
            </main>
        )
    };
}

