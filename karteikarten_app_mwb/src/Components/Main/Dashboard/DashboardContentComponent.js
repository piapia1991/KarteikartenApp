import React, { Component } from 'react';
import './DashboardContentComponent.css';
import './IndexCardComponent.js';
import IndexCardComponent from "./IndexCardComponent";
import { withRouter } from 'react-router-dom';
import {Button, Grid, Typography, Icon, Tooltip} from '@material-ui/core';
import base from "../../../base";
import './DashboardContentComponent.css';

const uuidv4 = require('uuid/v4');

export class DashboardContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { cards: {} };
    }

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
        const AddCardButton = withRouter(({ history }) => (
            <Tooltip id="tooltip-fab" title="Karte Hinzufügen">
                <Button
                    className="mb-5 highlightBackground" variant="fab" mini aria-label="add"
                    onClick={() => {
                        let newCardId = uuidv4();
                        let path = this.props.currentfolder;
                        let folders = Object.assign({}, this.state.folders);
                        if (! ("cards" in folders[path]))
                            folders[path].cards = [];
                        folders[path]["cards"].push(newCardId);
                        this.setState({
                            folders: folders
                        });
                        history.push(`/editing/${newCardId}`);
                    }} >
                    <Icon>add_icon</Icon>
                </Button>
            </Tooltip>
        ));

        return (
            <Grid item md={9} lg={10}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography  variant="subheading" >
                            Ordner1 > Ordner2 > Bliblablub
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container>
                            {Object.keys(this.state.cards).map((i) => (<IndexCardComponent title={this.state.cards[i].title} cardId={i} key={i}/>))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="marginTop-20">
                            <Grid item xs={11}/>
                            <Grid item xs={1}>
                                <AddCardButton />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        )
    };
}

