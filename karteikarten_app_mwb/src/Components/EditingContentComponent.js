import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './ContentComponent.css';
import './IndexCardComponent.js';
import { IndexCardComponent } from "./IndexCardComponent";
const uuidv4 = require('uuid/v4');

export class EditingContentComponent extends Component {

    render() {
        const data = [
            { title: "myBook", id: 1, data: "myData" },
            { title: "myBook2", id: 2, data: "myData2" },
            { title: "myBook3", id: 3, data: "myData3" },
            { title: "myBook4", id: 4, data: "myData4" },
            { title: "myBook5", id: 5, data: "myData5" },
            { title: "myBook6", id: 6, data: "myData6" },
            { title: "myBook7", id: 7, data: "myData7" },
            { title: "myBook8", id: 8, data: "myData8" }
        ]
        let id = uuidv4();
        let newCardRef = `/editing/${id}`;
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Ordner1 > Ordner2 > Bliblablub</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">Share</button>
                            <button className="btn btn-sm btn-outline-secondary">Export</button>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle"> This week</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {data.map((i) => (<IndexCardComponent key={i.id} title={i.title} />))}
                </div>

                <div>
                    <Link to={newCardRef}>Karte hinzufügen</Link>
                </div>
            </main>
        )
    };
}

export default EditingContentComponent;
