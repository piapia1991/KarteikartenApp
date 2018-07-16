import React, { Component } from 'react';
import './IndexCardComponent.js';
import IndexCardComponent from "./IndexCardComponent";
import {Button, Grid, Typography, Icon, Tooltip} from '@material-ui/core';
import base from "../../../base";
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from "prop-types";
import BreadcrumbNavigation from "../../Helper/BreadcrumbNavigation";

const styles = theme =>({
    root: {
        height: '100%'
    }
});


export class DashboardContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: {},
            folders: {}
        };
        // this.addCardToFolder = this.addCardToFolder.bind(this);
    }

    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired
            }).isRequired,
            staticContext: PropTypes.object
        }).isRequired
    };

    componentDidMount() {
        if (this.props.uid) {
            this.cardRef = base.syncState('users/' + this.props.uid + '/cards',
                {
                    context: this,
                    state: 'cards'
                });
            this.folderRef = base.syncState('users/' + this.props.uid + '/folders',
                {
                    context: this,
                    state: 'folders'
                });
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.cardRef);
        base.removeBinding(this.folderRef);
    }


    render() {
        const {currentfolder, classes, folder, cards, addCardToFolder} = this.props;

        const folderCardIds = folder['cards'] || [];

        //Filtere Cardids heraus die es nicht mehr gibt
        const folderCardIdsFiltered = folderCardIds.filter((cardId) =>
            cardId in cards
        );

        return (
            <Grid container direction={'column'} justify={'space-between'} className={classes.root}>
                <Grid item>
                    <Typography className={'paddingTop-10'}  variant="title" >
                        <BreadcrumbNavigation
                            path={currentfolder}
                            base={"overview"}
                        />
                    </Typography>
                    {/*ToDo: Herausfinden warum das window mit "Container mit spacing={24}" bei button hover springt*/}
                    <Grid container>
                        {folderCardIdsFiltered.map( (item) =>
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
                            <Tooltip id="tooltip-fab" title="Karte Hinzufügen">
                                <Button
                                    className="mb-5 highlightBackground" variant="fab" mini aria-label="add"
                                    onClick={addCardToFolder} >
                                    <Icon>add_icon</Icon>
                                </Button>
                            </Tooltip>
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

