import React, {Component} from 'react';
import {FolderComponent} from "../../Helper/FolderComponent";
import {Grid, List, ListSubheader} from '@material-ui/core';


export class LearningSidebarComponent extends Component {


    render() {
        return (
                <Grid container md={3} lg={2}>
                    <Grid item xs>
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
                    </Grid>
                </Grid>
        )
    }

    toggleFolderChecked = (folder, folderIndex) => {
        if (folder.checked !== undefined && folder.checked === true) {
            folder.checked = false
            this.toggleChildfolders(folder, false);
        } else {
            folder.checked = true;
           //  folder.cards = ["55c6264d-c828-4594-8ec6-6e2271ee7f3d", "a14752f1-7687-42f8-83ce-aa8da2b05a50"];
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
