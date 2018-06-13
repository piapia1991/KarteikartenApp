import React, {Component} from 'react';
import {SettingsContentComponent} from "./SettingsContentComponent";
import {SettingsSidebarComponent} from "./SettingsSidebarComponent";

export class SettingsComponent extends Component {
    render() {
        return(
                <div className="row">
                    <SettingsSidebarComponent/>
                    <SettingsContentComponent   deleteUser={this.props.deleteUser}/>
                </div>
        )
    };
}

