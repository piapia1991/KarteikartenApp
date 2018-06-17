import React, { Component } from 'react';
import QuillComponent from './QuillComponent';

export class EditorContentComponent extends Component {
    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Karte bearbeiten</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">???</button>
                            <button className="btn btn-sm btn-outline-secondary">???</button>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">???</button>
                        </div>
                    </div>
                </div>

                <div>
                    <QuillComponent />
                    <button>Speichern</button>
                    <button>Abbrechen</button>
                </div>

            </main>
        )
    };
}

