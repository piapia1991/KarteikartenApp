import React, { Component } from 'react';
import { EditorSidebarComponent } from './EditorSidebarComponent';
import { EditorContentComponent } from './EditorContentComponent';
import base from "../../../base";

export class EditorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card: {
                frontHtml: '',
                backHtml: ''
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
            <div className="row">
                <EditorSidebarComponent />
                <EditorContentComponent save={this.save} frontHtml={this.state.card.frontHtml || ''} backHtml={this.state.card.backHtml || ''} />
            </div>
        );
    }

    save = (frontHtml, backHtml) => {
        this.setState({
            card: {
                frontHtml: frontHtml,
                backHtml: backHtml
            }
        });
    };
}
