import React, { Component } from 'react';
import QuillComponent from './QuillComponent';
import {Button, TextField, Grid} from '@material-ui/core';
import { MaterialIcon } from "../../Helper/MaterialIcon";

export class EditorContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            front: true,
            frontHtml: this.props.frontHtml,
            backHtml: this.props.backHtml,
            title: this.props.title
        };
        this.backup = {
            frontHtml: this.props.frontHtml,
            backHtml: this.props.backHtml,
            title: this.props.title
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.frontHtml !== prevProps.frontHtml || this.props.backHtml !== prevProps.backHtml || this.props.title !== prevProps.title) {
            this.setState({
                frontHtml: this.props.frontHtml,
                backHtml: this.props.backHtml,
                title: this.props.title
            });
            this.backup = {
                frontHtml: this.props.frontHtml,
                backHtml: this.props.backHtml,
                title: this.props.title
            };
        }
    }

    render() {
        let html = this.state.front ? this.state.frontHtml : this.state.backHtml;
        let page = this.state.front ? "Vorderseite" : "Rückseite";
        return (
            <Grid container md={9} lg={10}>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            label="Name"
                            value={this.state.title}
                            onChange={this.changeTitle}
                            margin="normal"
                            fullWidth
                        />
                    </div>
                    <div><p>{page}</p></div>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">???</button>
                            <button className="btn btn-sm btn-outline-secondary">???</button>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">???</button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <QuillComponent html={html} onChange={this.onChange} />
                </Grid>

                <Grid id="buttonRow" item xs={12}>
                    <Button className="m-4 highlightBackground" variant="fab" mini aria-label="turn"
                        onClick={() => this.turn()}>
                        <MaterialIcon icon={'turn'} />
                    </Button>
                    <Button className="m-4 highlightBackground" variant="fab" mini aria-label="save"
                        onClick={() => this.save()}>
                        <MaterialIcon icon={'save'} />
                    </Button>
                    <Button className="m-4 highlightBackground" variant="fab" mini aria-label="cancel"
                        onClick={() => this.cancel()}>
                        <MaterialIcon icon={'cancel'} />
                    </Button>
                </Grid>
            </Grid>
        );
    }

    onChange = html => {
        if (this.state.front) {
            this.setState({
                frontHtml: html
            });
        } else {
            this.setState({
                backHtml: html
            });
        }
    };

    changeTitle = e => {
        this.setState({
            title: e.target.value
        });
    };

    save = () => {
        this.props.save(this.state.frontHtml, this.state.backHtml, this.state.title);
    };

    cancel = () => {
        this.setState({
            frontHtml: this.backup.frontHtml,
            backHtml: this.backup.backHtml,
            title: this.backup.title
        });
    };

    turn = () => {
        this.setState({
            front: !this.state.front
        });
    };
}
