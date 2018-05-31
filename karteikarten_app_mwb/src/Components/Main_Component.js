import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Editing_Component} from "./Editing_Component";
import {NotFound_Component} from "./NotFound_Component";
import {Learning_Component} from "./Learning_Component";

export class Main_Component extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={Editing_Component}/>
                    <Route path="/editing" component={Editing_Component}/>
                    <Route path="/learning" component={Learning_Component}/>
                    <Route component={NotFound_Component}/>
                </Switch>
            </div>
        )
    };
}

