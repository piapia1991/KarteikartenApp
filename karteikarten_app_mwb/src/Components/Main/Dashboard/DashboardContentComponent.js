import React, { Component } from 'react';
import './DashboardContentComponent.css';
import './IndexCardComponent.js';
import {IndexCardComponent} from "./IndexCardComponent";
import {MaterialIcon} from "../../Helper/MaterialIcon";
import { withRouter } from 'react-router-dom';
import {Button, Grid, Typography, Icon, Tooltip} from '@material-ui/core';
import base from "../../../base";
import './DashboardContentComponent.css';

const uuidv4 = require('uuid/v4');

export class DashboardContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {cards: {}, currentfolder: this.props.currentfolder};
    }

    componentDidMount() {
        if (this.props.uid) {
            this.folderRef = base.syncState('users/' + this.props.uid + '/cards',
                {
                    context: this,
                    state: 'cards'
                });
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.folderRef);
    }


    render() {
        const AddCardButton = withRouter(({ history }) => (
            <Tooltip id="tooltip-fab" title="Karte Hinzufügen">
                <Button
                    className="mb-5 highlightBackground" variant="fab" mini aria-label="add"
                    onClick={() => {
                        let newCardId = uuidv4();
                        history.push(`/editing/${newCardId}`);
                    }} >
                    <Icon>add_icon</Icon>
                </Button>
            </Tooltip>
        ));

        return (
                <Grid container lg={9} md={8}>
                    <Grid item xs={12}>
                        <Typography  variant="subheading" >
                            Ordner1 > Ordner2 > Bliblablub
                        </Typography>
                    </Grid>

                    <Grid container xs={12}>
                        <Grid container xs={12}>
                            {Object.keys(this.state.cards).map((i) => (<IndexCardComponent title={this.state.cards[i].title} cardId={i} key={i}/>))}
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <div className="marginTop-20">
                            <Grid item xs={11}/>
                            <Grid item xs={1}>
                                <AddCardButton />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>

        )
    };
}

