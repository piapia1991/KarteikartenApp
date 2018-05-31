import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {EditingComponent} from "./EditingComponent";
import {NotFoundComponent} from "./NotFoundComponent";
import {LearningComponent} from "./LearningComponent";

export class MainComponent extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={EditingComponent}/>
                    <Route path="/editing" component={EditingComponent}/>
                    <Route path="/learning" component={LearningComponent}/>
                    <Route component={NotFoundComponent}/>
                </Switch>
            </div>
        )
    };
}

