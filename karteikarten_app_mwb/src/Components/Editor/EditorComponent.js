import React, { Component } from 'react';
import { EditorSidebarComponent } from './EditorSidebarComponent';
import { EditorContentComponent } from './EditorContentComponent';

export class EditorComponent extends Component {

    render() {
        let cardId = this.props.match.params.cardId;
        return (
            <div className="row">
                <EditorSidebarComponent />
                <EditorContentComponent uid={this.props.uid} cardId={cardId} />
            </div>
        );
    }
}
