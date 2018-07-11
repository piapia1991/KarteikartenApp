import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardComponent } from "./Dashboard/DashboardComponent";
import { EditorComponent } from "./Editor/EditorComponent";
import { NotFoundComponent } from "./NotFoundComponent";
import { LearningComponent } from "./Learning/LearningComponent";
import { SettingsComponent } from "./Settings/SettingsComponent";


// See https://github.com/pillarjs/path-to-regexp/tree/v1.7.0 for path regex

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <DashboardComponent {...props} uid={this.props.uid} />} />
                    <Route path="/editing/:cardId" render={(props) => <EditorComponent {...props} uid={this.props.uid} />} />
                    <Route path='/overview/:path+' render={(props) => <DashboardComponent {...props} uid={this.props.uid} />} />
                    <Route path="/learning" render={(props) => <LearningComponent {...props} uid={this.props.uid} />} />
                    <Route path="/settings" render={(props) => <SettingsComponent {...props} deleteUser={this.props.deleteUser} />} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </div>
        )
    };
}

