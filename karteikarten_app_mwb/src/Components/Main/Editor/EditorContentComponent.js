import React, { Component } from 'react';
import QuillComponent from './QuillComponent';
import Button from '@material-ui/core/Button';
import { MaterialIcon } from "../../Helper/MaterialIcon";

export class EditorContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            front: true,
            frontHtml: this.props.frontHtml,
            backHtml: this.props.backHtml
        };
        this.backup = {
            frontHtml: this.props.frontHtml,
            backHtml: this.props.backHtml
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.frontHtml !== prevProps.frontHtml || this.props.backHtml !== prevProps.backHtml) {
            this.setState({
                frontHtml: this.props.frontHtml,
                backHtml: this.props.backHtml
            });
        }
        this.backup = {
            frontHtml: this.props.frontHtml,
            backHtml: this.props.backHtml
        };
    }

    render() {
        let html = this.state.front ? this.state.frontHtml : this.state.backHtml;
        let page = this.state.front ? "Vorderseite" : "Rückseite";
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Karte bearbeiten - {page}</h1>
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

    save = () => {
        this.props.save(this.state.frontHtml, this.state.backHtml);
    };

    cancel = () => {
        this.setState({
            frontHtml: this.backup.frontHtml,
            backHtml: this.backup.backHtml
        });
    };

    turn = () => {
        this.setState({
            front: !this.state.front
        });
    };
}

