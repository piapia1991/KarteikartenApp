import React, {Component} from 'react';
import {MaterialIcon} from "./MaterialIcon";

export class FolderButtonComponent extends Component {
    icons = [];
    constructor(props) {
        super(props);
        this.icons[true] = 'expand_more';
        this.icons[false] = 'chevron_right';
    }

    render() {
        let iconClass= '';
        if(this.props.childfolders === undefined){
            iconClass= 'pl-4';
        }
        return (
            <button onClick={() => this.props.toggleOpenClose()} className="d-flex align-items-center p-0">
                {this.props.childfolders && <MaterialIcon icon={this.icons[this.props.folderOpen]}/>}
                <MaterialIcon className={iconClass} icon={"folder"}/>
                <span>{this.props.name}</span>
            </button>
        )
    };
}

