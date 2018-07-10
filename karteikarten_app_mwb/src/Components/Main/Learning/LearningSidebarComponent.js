import React, {Component} from 'react';
import {FolderComponent} from "../../Helper/FolderComponent";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

export class LearningSidebarComponent extends Component {


    render() {
        return (
            <div>
                <nav className="col-md-2 d-none d-md-block sidebar">
                    <div className="sidebar-sticky py-3">

                        <List
                            component="nav"
                            subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                        >
                            {Object.keys(this.props.folders).map(key => (
                                <FolderComponent
                                    index={key}
                                    folder={this.props.folders[key]}
                                    key={key}
                                    currentFolderClick={this.toggleFolderChecked}
                                    withCheckboxes={true}
                                />
                            ))
                            }
                        </List>
                    </div>
                </nav>
            </div>
        )
    }

    toggleFolderChecked = (folder, folderIndex) => {
        if (folder.checked !== undefined && folder.checked === true) {
            folder.checked = false
            this.toggleChildfolders(folder, false);
        } else {
            folder.checked = true;
            this.toggleChildfolders(folder, true);
        }
        this.props.updateFolder(folder, folderIndex)
    }

    toggleChildfolders = (folder, value) => {
        if (folder.childfolders !== undefined) {
            for (var childfolder in folder.childfolders) {
                folder.childfolders[childfolder].checked = value;
                this.toggleChildfolders(folder.childfolders[childfolder], value);
            }
        }
    }


}
