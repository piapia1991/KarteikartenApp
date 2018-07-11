import React, { Component } from 'react';
import QuillComponent from './QuillComponent';
import Button from '@material-ui/core/Button';
import { MaterialIcon } from "../../Helper/MaterialIcon";
import TextField from '@material-ui/core/TextField';

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
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom">
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
                </div>

                <div>
                    <QuillComponent html={html} onChange={this.onChange} />
                </div>

                <div id="buttonRow" className="row d-flex flex-row-reverse">
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
                </div>
            </main>
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
