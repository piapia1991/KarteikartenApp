import React, { Component } from 'react';
import { EditorSidebarComponent } from './EditorSidebarComponent';
import { EditorContentComponent } from './EditorContentComponent';
import base from "../../../base";
import {Grid} from '@material-ui/core';
export class EditorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card: {
                frontHtml: '',
                backHtml: '',
                title: ''
            }
        };
    }

    componentDidMount() {
        let cardId = this.props.match.params.cardId;
        if (this.props.uid) {
            this.cardsRef = base.syncState('users/' + this.props.uid + '/cards/' + cardId,
                {
                    context: this,
                    state: 'card'
                }
            );
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.cardsRef);
    }

    render() {
        return (
            <Grid className={'main'} container>
                <Grid item  lg={2} md={3}>
                    <EditorSidebarComponent />
                </Grid>
                <Grid item  md={9} lg={10}>
                    <EditorContentComponent save={this.save} frontHtml={this.state.card.frontHtml || ''} backHtml={this.state.card.backHtml || ''} title={this.state.card.title || ''} />
                </Grid>
            </Grid>
        );
    }

    save = (frontHtml, backHtml, title) => {
        this.setState({
            card: {
                frontHtml: frontHtml,
                backHtml: backHtml,
                title: title
            }
        });
    };
}
