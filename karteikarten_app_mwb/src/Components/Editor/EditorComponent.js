import React, { Component } from 'react';
import { EditorSidebarComponent } from './EditorSidebarComponent';
import { EditorContentComponent } from './EditorContentComponent';

export class EditorComponent extends Component {

    render() {
        return (
            <div className="row">
                <EditorSidebarComponent />
                <EditorContentComponent />
            </div>
        );
    }
}
