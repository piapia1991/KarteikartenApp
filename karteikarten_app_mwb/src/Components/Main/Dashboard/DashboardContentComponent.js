import React, { Component } from 'react';
import './DashboardContentComponent.css';
import './IndexCardComponent.js';
import {IndexCardComponent} from "./IndexCardComponent";
import Button from '@material-ui/core/Button';
import {MaterialIcon} from "../../Helper/MaterialIcon";
import { withRouter } from 'react-router-dom';
import {Button, Grid, Typography, Icon, Tooltip}
import base from "../../../base";
import './DashboardContentComponent.css';

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
        const AddCardButton = withRouter(({ history }) => (
            <Button
                className="mb-5 highlightBackground" variant="fab" mini aria-label="add"
                onClick={() => {
                    let newCardId = uuidv4();
                    history.push(`/editing/${newCardId}`);
                }} >
                <MaterialIcon icon={'add'} />
            </Button>
        ));

        return (
            <div class="marginTop-20">
                <Grid container lg={9} md={8}>
                    <Grid container role="main" lg={12}>
                        <Grid item xs={12} className={styles.header}>
                            <Typography  variant="title" gutterBottom className="marginTop-20">
                                Ordner1 > Ordner2 > Bliblablub
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container role="main" lg={12}>
                        <Grid item xs={12}>
                            <Button color='secondary' variant="contained" className="marginRight-10">Share</Button>
                            <Button color='secondary' variant="contained" className="marginRight-10">Export</Button>
                            <Button color='secondary' variant="contained" className="marginRight-10"> This week</Button>
                        </Grid>
                        <Grid item xs={12}>
                            {Object.keys(this.state.cards).map((i) => (<IndexCardComponent title={this.state.cards[i].title} cardId={i} key={i}/>))}
                        </Grid>
                    </Grid>
                    <Grid container xs={12}>
                        <div className="marginTop-20">
                            <Grid item xs={1}>
                                <Tooltip id="tooltip-fab" title="Karte Hinzufügen">
                                    <AddCardButton />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={11}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    };
}

