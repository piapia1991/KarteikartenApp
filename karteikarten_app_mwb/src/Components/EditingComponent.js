import React, {Component} from 'react';
import {EditingContentComponent} from "./EditingContentComponent";
import {EditingSidebarComponent} from "./EditingSidebarComponent";

export class EditingComponent extends Component {
    render() {
        return(

                <div className="row">
                    <EditingSidebarComponent/>
                    <EditingContentComponent/>
                </div>
        )
    };
}

