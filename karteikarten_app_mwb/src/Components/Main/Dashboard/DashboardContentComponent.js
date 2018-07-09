import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './IndexCardComponent.js';
import {IndexCardComponent} from "./IndexCardComponent";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {MaterialIcon} from "../../Helper/MaterialIcon";
import base from "../../../base";

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
        let id = uuidv4();
        let newCardRef = `/editing/${id}`;
        return (
            <React.Fragment>
                <Grid container role="main" md={9} classes='align-content-md-right'>
                    <div>
                        <h1 className="h2">Ordner1 > Ordner2 > Bliblablub</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <Button color='secondary'>Share</Button>
                                <Button color='secondary'>Export</Button>
                                <Button color='secondary'> This week</Button>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        {Object.keys(this.state.cards).map((i) => (<IndexCardComponent title={i}/>))}
                    </div>


                </Grid>
                <div className="row d-flex flex-row-reverse">
                    <Link to={newCardRef}>
                        <Button className="mb-5 highlightBackground" variant="fab" mini aria-label="add">
                            <MaterialIcon icon={'add'}/>
                        </Button>
                    </Link>
                </div>
            </React.Fragment>
        )
    };
}

