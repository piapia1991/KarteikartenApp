import React, {Component} from 'react';
import {Sidebar_Component} from "./Sidebar_Component";
import {Content_Component} from "./Content_Component";

export class Editing_Component extends Component {
    render() {
        return(

                <div className="row">
                    <Sidebar_Component/>
                    <Content_Component/>
                </div>
        )
    };
}

