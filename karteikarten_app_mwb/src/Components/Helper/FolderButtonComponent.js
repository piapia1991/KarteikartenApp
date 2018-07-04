import React, {Component} from 'react';
import {MaterialIcon} from "./MaterialIcon";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
                    <MaterialIcon className={iconClass} icon={"folder"}/>
                </ListItemIcon>
                <ListItemText inset primary={this.props.folder.name}/>
                <span  onClick={() => this.props.toggleOpenClose()}>{this.props.folder.childfolders && <MaterialIcon icon={this.icons[this.props.folderOpen]}/>}</span>
            </ListItem>
        )
    };
}

