import React, { Component } from 'react';
import QuillComponent from './QuillComponent';
import {Button, TextField, Grid, Typography, Icon} from '@material-ui/core';

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
            <Grid container>
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
                    <div><Typography variant="display1">{page}</Typography></div>
                </Grid>

                <Grid item xs={12}>
                    <QuillComponent html={html} onChange={this.onChange} />
                </Grid>

                <Grid id="buttonRow" item xs={12}>
                    <Button className="marginRight-10" variant="fab" mini aria-label="turn"
                        onClick={() => this.turn()}>
                        {page === "Vorderseite" ? <Icon>flip_to_back_icon</Icon>:<Icon>flip_to_front_icon</Icon>}
                    </Button>
                    <Button className="marginRight-10" variant="fab" mini aria-label="save"
                        onClick={() => this.save()}>
                        <Icon>save_icon</Icon>
                    </Button>
                    <Button className="marginRight-10" variant="fab" mini aria-label="cancel"
                        onClick={() => this.cancel()}>
                        <Icon>cancel_icon</Icon>
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
