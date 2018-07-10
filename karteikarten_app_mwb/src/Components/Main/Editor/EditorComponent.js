import React, { Component } from 'react';
import { EditorSidebarComponent } from './EditorSidebarComponent';
import { EditorContentComponent } from './EditorContentComponent';
import base from "../../../base";

export class EditorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card: {
                html: ''
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
                <EditorContentComponent save={this.save} cancel={this.cancel} html={this.state.card.html || ''} />
            </div>
        );
    }

    save = html => {
        this.setState({
            card: {
                html: html
            }
        });
    };

    cancel = () => {
        console.log("cancel");
    }
}
