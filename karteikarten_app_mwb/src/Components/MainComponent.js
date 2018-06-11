import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {EditingComponent} from "./EditingComponent";
import {NotFoundComponent} from "./NotFoundComponent";
import {LearningComponent} from "./LearningComponent";
import {SettingsComponent} from "./SettingsComponent";

export class MainComponent extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={EditingComponent} />
                    <Route path="/editing" component={EditingComponent}/>
                    <Route path="/learning" component={LearningComponent}/>
                    <Route path="/settings" render={(props)=> <SettingsComponent {...props} deleteUser={this.props.deleteUser}/>}/>
                    <Route component={NotFoundComponent}/>
                </Switch>
            </div>
        )
    };
    // TODO: Bessere Alternative zum Durchreichen von Properties? (Settings) eventuell Redux Store??

}

