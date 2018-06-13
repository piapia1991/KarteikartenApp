import React, {Component} from 'react';
import {MaterialIcon} from "./MaterialIcon";
import {FolderContentComponent} from "./FolderContentComponent";

export class FolderComponent extends Component {
    icons = [];

    constructor(props) {
        super(props);
        this.state = {folderOpen: false};
        this.icons[true] = 'expand_more';
        this.icons[false] = 'chevron_right'
    }


    render() {
        return (
            <div>
                <button onClick={this.toggleOpenClose.bind(this)} className="d-flex align-items-center p-0">
                    <MaterialIcon icon={this.icons[this.state.folderOpen]}/>
                    <MaterialIcon icon={"folder"}/>
                    <span>Ordner Ebene 1</span>
                </button>
                {this.state.folderOpen && <FolderContentComponent/>}
            </div>
        )
    };

    toggleOpenClose() {
        this.setState({
            folderOpen: !this.state.folderOpen
        });
    }
}

