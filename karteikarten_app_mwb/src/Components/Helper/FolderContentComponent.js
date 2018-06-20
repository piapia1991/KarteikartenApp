import React, {Component} from 'react';
import {FolderComponent} from "./FolderComponent";

export class FolderContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {folderOpen: false};
    }


    render() {
        var foldersList = [];
        if(this.props.childfolders !== undefined) {
            Object.keys(this.props.childfolders).map(key => (
                    foldersList.push(
                        <FolderComponent folder={this.props.childfolders[key]} index={key} key={key}/>
                    )
            ));
        }
        return (
            <ul className="nav flex-column pl-md-4">
                {foldersList}
            </ul>

        )
    };
}

