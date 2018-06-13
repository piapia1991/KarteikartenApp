import React, {Component} from 'react';
import QuillComponent from './QuillComponent';

export class EditorContentComponent extends Component {
    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <QuillComponent/>
                <button>Karte hinzufügen</button>
            </main>
        )
    };
}

