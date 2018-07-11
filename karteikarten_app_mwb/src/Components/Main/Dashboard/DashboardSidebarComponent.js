import React, {Component} from 'react';
import {FolderComponent} from "../../Helper/FolderComponent";
import 'react-contexify/dist/ReactContexify.min.css';
import './DashboardSidebarComponent.css';
import {DashboardSidebarMenuComponent} from "./DashboardSidebarMenuComponent";
import {DashboardDialogComponent} from "./DashboardDialogComponent";
import {Typography, Grid, List, ListSubheader, Button, Icon, Tooltip} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    padding: 10,
});

export class DashboardSidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            dialogMode: undefined,
            dialogTargetfolder: undefined
        };
    };

    render() {
        return (
            <Grid container lg={3}>
                <div id="sidebar" className="sidebar">
                    <Grid container xs={12}>
                        <div className="marginTop-20">
                            <List component="nav" subheader={<ListSubheader component="div"> <Typography variant='subheading'>Folders</Typography></ListSubheader>}>
                                {Object.keys(this.props.folders).map(key => (
                                    <FolderComponent
                                        index={key}
                                        folder={this.props.folders[key]}
                                        key={key}
                                        changeCurrentfolder={this.props.changeCurrentfolder}/>
                                ))
                                }
                            </List>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <Grid container>
                            <Grid item sm={10}/>

                            <Grid item sm={2}>
                                <Tooltip id="tooltip-fab" title="Ordner Hinzufügen">
                                    <Button variant="fab" mini aria-label="add" onClick={() => this.handleClickDialogOpen('add')}>
                                        <Icon>add_icon</Icon>
                                    </Button>
                                </Tooltip>
                            </Grid>
                        </Grid>

                        <DashboardSidebarMenuComponent addFolder={this.handleClickDialogOpen}/>
                        <DashboardDialogComponent open={this.state.dialogOpen} handleClose={this.handleClose}
                                                  addFolder={this.props.addFolder} targetfolder={this.state.dialogTargetfolder}
                                                  mode={this.state.dialogMode}/>
                    </Grid>
                </div>
            </Grid>
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

