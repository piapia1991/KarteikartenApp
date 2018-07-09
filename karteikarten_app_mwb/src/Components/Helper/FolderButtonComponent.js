import React, {Component} from 'react';
import {MaterialIcon} from "./MaterialIcon";
import {ListItem, ListItemIcon, ListItemText, Icon} from '@material-ui/core'

export class FolderButtonComponent extends Component {
    icons = [];

    constructor(props) {
        super(props);
        this.icons[true] = 'expand_more';
        this.icons[false] = 'chevron_right';
    }

    render() {
        let iconClass = '';
        //
        return (
            <ListItem onClick={() => this.props.changeCurrentfolder(this.props.folder)} button>
                <ListItemIcon>
                    <Icon>folder_icon</Icon>

                </ListItemIcon>
                <ListItemText inset primary={this.props.folder.name}/>
                <span  onClick={() => this.props.toggleOpenClose()}>{this.props.folder.childfolders && <MaterialIcon icon={this.icons[this.props.folderOpen]}/>}</span>
            </ListItem>
        )
    };
}

