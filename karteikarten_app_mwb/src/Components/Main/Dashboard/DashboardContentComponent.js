import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DashboardContentComponent.css';
import './IndexCardComponent.js';
import {IndexCardComponent} from "./IndexCardComponent";
import Button from '@material-ui/core/Button';
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
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Ordner1 > Ordner2 > Bliblablub</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <button className="btn btn-sm btn-outline-secondary">Share</button>
                                <button className="btn btn-sm btn-outline-secondary">Export</button>
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle"> This week</button>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        {Object.keys(this.state.cards).map((i) => (<IndexCardComponent title={i}/>))}
                    </div>

                    <div>
                        <Link to={newCardRef}>
                            <Button className="mb-5 highlightBackground" variant="fab" mini aria-label="add">
                                <MaterialIcon icon={'add'}/>
                            </Button>
                        </Link>
                    </div>
                </main>

            </React.Fragment>
        )
    };
}

