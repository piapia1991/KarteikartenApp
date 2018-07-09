import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './IndexCardComponent.js';
import {IndexCardComponent} from "./IndexCardComponent";
import {Button, Grid, Typography, Icon, Tooltip} from '@material-ui/core';
import base from "../../../base";

const uuidv4 = require('uuid/v4');

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        paddingTop: 300,
    },
});

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
        let id = uuidv4();
        let newCardRef = `/editing/${id}`;
        return (
                <Grid container md={8}>
                    <Grid container role="main" lg={12}>
                        <Grid item xs={12} className={styles.header}>
                            <Typography  variant="title" gutterBottom>
                                Ordner1 > Ordner2 > Bliblablub
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color='secondary' variant="contained">Share</Button>
                            <Button color='secondary' variant="contained">Export</Button>
                            <Button color='secondary' variant="contained"> This week</Button>
                        </Grid>
                        <Grid item xs={12}>
                            {Object.keys(this.state.cards).map((i) => (<IndexCardComponent title={i}/>))}
                        </Grid>
                    </Grid>
                    <Grid container md={12}>
                        <Grid item xs={11}/>
                        <Grid item xs={1}>
                            <Tooltip id="tooltip-fab" title="Karte Hinzufügen">
                                <Button className="mb-5 highlightBackground" variant="fab" mini aria-label="add" to={newCardRef}>
                                    <Icon>add_icon</Icon>
                                </Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>

        )
    };
}

