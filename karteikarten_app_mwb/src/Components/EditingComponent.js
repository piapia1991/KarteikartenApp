import React, {Component} from 'react';
import {Sidebar_Component} from "./Sidebar_Component";
import {ContentComponent} from "./ContentComponent";

export class EditingComponent extends Component {
    render() {
        return(

                <div className="row">
                    <Sidebar_Component/>
                    <ContentComponent/>
                </div>
        )
    };
}

