import React, {Component} from 'react';
import {FolderComponent} from "./FolderComponent";
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

export class FolderContentComponent extends Component {


    render() {
        var foldersList = [];
        if(this.props.childfolders !== undefined) {
            Object.keys(this.props.childfolders).map(key => (
                    foldersList.push(
                        <FolderComponent  changeCurrentfolder={this.props.changeCurrentfolder} folder={this.props.childfolders[key]} index={key} key={key}/>
                    )
            ));
        }
        return (
            <Collapse in={this.props.folderOpen}  timeout="auto" unmountOnExit>
                <List component="div" className="pl-2" disablePadding>
                {foldersList}
                </List>
            </Collapse>
        )
    };
}

