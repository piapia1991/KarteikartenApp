import React, {Component} from 'react';
import {ListItem, ListItemIcon, ListItemText, Icon, Checkbox} from '@material-ui/core'

export class FolderButtonComponent extends Component {
    icons = [];

    constructor(props) {
        super(props);
        this.icons[true] = 'expand_more';
        this.icons[false] = 'chevron_right';
    }

    render() {
        let checked = false;
        if (this.props.withCheckboxes && this.props.folder.checked !== undefined) {
            checked = this.props.folder.checked;
        }
        return (
            <ListItem onClick={(e) => this.handleOnClick(e)} button>
                {this.props.withCheckboxes &&
                <Checkbox
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                />}
                <ListItemIcon>
                    <Icon>folder_icon</Icon>
                </ListItemIcon>
                <ListItemText inset primary={this.props.folder.name}/>
                <span onClick={() => this.props.toggleOpenClose()}>
                    {this.props.folder.childfolders &&
                    <Icon>{this.icons[this.props.folderOpen]}</Icon>
                    }
                </span>
            </ListItem>
        )
    };

    handleOnClick = (e) => {
        if (e.target.innerHTML !== 'chevron_right' && e.target.innerHTML !== 'expand_more') {
            this.props.currentFolderClick(this.props.folder, this.props.index)
        }
    }
}

