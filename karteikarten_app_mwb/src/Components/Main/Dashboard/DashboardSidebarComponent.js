import React, {Component} from 'react';
import {MaterialIcon} from "../../Helper/MaterialIcon";
import {FolderComponent} from "../../Helper/FolderComponent";
import 'react-contexify/dist/ReactContexify.min.css';
import {DashboardSidebarMenuComponent} from "./DashboardSidebarMenuComponent";
import {DashboardDialogComponent} from "./DashboardDialogComponent";
import {Typography, Grid, List, ListSubheader, Button} from '@material-ui/core'
export class DashboardSidebarComponent extends Component {



    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            dialogMode: undefined,
            dialogTargetfolder: undefined
        };
    }

    render() {
        return (
            <div>
                <Grid md={3}>
                    <List component="nav" subheader={<ListSubheader component="div"> <Typography variant='subheading'>Folders</Typography></ListSubheader>}
                    >
                        {Object.keys(this.props.folders).map(key => (
                            <FolderComponent
                                index={key}
                                folder={this.props.folders[key]}
                                key={key}
                                changeCurrentfolder={this.props.changeCurrentfolder}/>
                        ))
                        }
                    </List>
                    <div id="buttonRow" className="row d-flex flex-row-reverse">
                        <Button className="m-4 highlightBackground" variant="fab" mini aria-label="add"
                                onClick={() => this.handleClickDialogOpen('add')}>
                            <MaterialIcon icon={'add'}/>
                        </Button>
                    </div>
                    <DashboardSidebarMenuComponent addFolder={this.handleClickDialogOpen}/>
                </Grid>
                <DashboardDialogComponent open={this.state.dialogOpen} handleClose={this.handleClose}
                                          addFolder={this.props.addFolder} targetfolder={this.state.dialogTargetfolder}
                                          mode={this.state.dialogMode}/>
            </div>
        )
    }
    ;

    handleClickDialogOpen = (mode, targetfolder) => {
        this.setState({dialogOpen: true, dialogMode: mode, dialogTargetfolder: targetfolder});
    };

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

}

