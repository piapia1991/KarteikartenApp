import React, {Component} from 'react';
import './DashboardContentComponent.css';
import './IndexCardComponent.js';
import IndexCardComponent from "./IndexCardComponent";
import {Button, Grid, Typography, Icon, Tooltip} from '@material-ui/core';
import './DashboardContentComponent.css';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        height: '100%'
    }
});


export class DashboardContentComponent extends Component {


    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired
            }).isRequired,
            staticContext: PropTypes.object
        }).isRequired
    };


    render() {
        const {classes, folder, addCardToFolder} = this.props;
        const cards = this.props.cards || {};

        let title = '';
        let folderCardIds = [];
        if (folder !== undefined) {
            title = folder.name || '';
            folderCardIds = folder['cards'] || [];
        } else{
            folderCardIds = Object.keys(cards);
        }

        return (
            <Grid container direction={'column'} justify={'space-between'} className={classes.root}>
                <Grid item>
                    <Typography className={'paddingTop-10'} variant="title">
                        {title}
                    </Typography>
                    {/* TODO : Herausfinden warum das window mit "Container mit spacing={24}" bei button hover springt*/}
                    <Grid container>
                        {folderCardIds.map((item) =>
                            <IndexCardComponent
                                title={cards[item].title}
                                cardId={item}
                                key={item}
                            />
                        )}
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item xs={11}/>
                        <Grid item xs={1} className={'padding-15'}>
                            { folder !== undefined &&
                            <Tooltip id="tooltip-fab" title="Karte Hinzufügen">
                                <Button
                                    className="mb-5 highlightBackground" variant="fab" mini aria-label="add"
                                    onClick={addCardToFolder}>
                                    <Icon>add_icon</Icon>
                                </Button>
                            </Tooltip>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    };
}

DashboardContentComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardContentComponent)

