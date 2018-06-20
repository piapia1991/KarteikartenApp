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
        let iconClass = '';
        if (this.props.childfolders === undefined) {
            iconClass = 'pl-4';
        }
        return (
            <button className="d-flex align-items-center p-0">
                {this.props.childfolders &&
                <span onClick={() => this.props.toggleOpenClose()}><MaterialIcon
                    icon={this.icons[this.props.folderOpen]}/></span>}
                <span onClick={() => this.props.changeCurrentfolder(this.props.index)}>
                <MaterialIcon className={iconClass} icon={"folder"}/>
                <span>{this.props.name}</span>
                </span>
            </button>
        )
    };
}

