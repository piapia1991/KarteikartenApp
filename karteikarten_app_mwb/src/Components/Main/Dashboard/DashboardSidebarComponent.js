import React, {Component} from 'react';
import 'react-contexify/dist/ReactContexify.min.css';
import './DashboardSidebarComponent.css';
import {DashboardSidebarMenuComponent} from "./DashboardSidebarMenuComponent";
import {DashboardDialogComponent} from "./DashboardDialogComponent";
import DashboardSidebarFolderComponent from "./DashboardSidebarFolderComponent"

import {Typography, Grid, List, ListSubheader, Button, Icon, Tooltip} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";



const styles = theme => ({
    root: {
        height: '100%'
    }
});

class DashboardSidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            dialogMode: undefined,
            dialogTargetfolder: undefined
        };
    };

    render() {
        const {classes, addExistingCardToFolder} = this.props;
        return (
            <Grid className={classes.root} direction={'column'} justify={'space-between'} container>
                <Grid item>
                    <List component="nav" subheader={
                        <ListSubheader className={'paddingTop-10'} component="div">
                        <Typography
                        variant='title'>Ordner verwalten</Typography></ListSubheader>
                    }>
                        {
                            Object.keys(this.props.folders).map(key => {
                                return (
                                    <DashboardSidebarFolderComponent
                                        key={key}
                                        id={key}
                                        folder={this.props.folders[key]}
                                        addExistingCardToFolder={addExistingCardToFolder}
                                    />
                                )
                            })
                        }
                    </List>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item sm={10}/>

                        <Grid item className={'padding-15'} sm={2}>
                            <Tooltip id="tooltip-fab" title="Ordner Hinzufügen">
                                <Button variant="fab" mini aria-label="add"
                                        onClick={() => this.handleClickDialogOpen('add')}>
                                    <Icon>add_icon</Icon>
                                </Button>
                            </Tooltip>
                        </Grid>
                    </Grid>

                    <DashboardSidebarMenuComponent addFolder={this.handleClickDialogOpen}/>
                    <DashboardDialogComponent open={this.state.dialogOpen} handleClose={this.handleClose}
                                              addFolder={this.props.addFolder}
                                              targetfolder={this.state.dialogTargetfolder}
                                              mode={this.state.dialogMode}/>
                </Grid>
            </Grid>
        )
    }
    ;

    handleClickDialogOpen = (mode, targetfolder) => {
        this.setState({
            dialogOpen: true,
            dialogMode: mode,
            dialogTargetfolder: targetfolder
        });
    };

    handleClose = () => {
        this.setState({
            dialogOpen: false
        });
    };

}

DashboardSidebarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardSidebarComponent)

