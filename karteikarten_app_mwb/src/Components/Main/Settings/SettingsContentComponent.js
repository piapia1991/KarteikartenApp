import React, {Component} from 'react';
import {SettingsContentComponentImport} from "./SettingsContentComponentImport";
import {SettingsContentComponentProfile} from "./SettingsContentComponentProfile";
import { Switch, Route } from 'react-router-dom';

export class SettingsContentComponent extends Component {
    render() {
        return(
            <React.Fragment>
                <Switch>
                    <Route path="/settings/profile" render={(props) => <SettingsContentComponentProfile{...props} uid={this.props.uid} deleteUser={this.props.deleteUser}/>} />
                    <Route path='/settings/import' render={(props) => <SettingsContentComponentImport {...props} uid={this.props.uid} />} />
                </Switch>
            </React.Fragment>
        )
    };
}

