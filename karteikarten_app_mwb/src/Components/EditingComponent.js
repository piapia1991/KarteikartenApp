import React, {Component} from 'react';
import {SidebarComponent} from "./SidebarComponent";
import {ContentComponent} from "./ContentComponent";

export class EditingComponent extends Component {
    render() {
        return(

                <div className="row">
                    <SidebarComponent/>
                    <ContentComponent/>
                </div>
        )
    };
}

