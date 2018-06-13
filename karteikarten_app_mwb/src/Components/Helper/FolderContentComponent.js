import React, {Component} from 'react';
import {MaterialIcon} from "./MaterialIcon";

export class FolderContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {folderOpen: false};
    }


    render() {
        return (
            <ul className="nav flex-column pl-md-4">

                <li>Karteikarte 1</li>
                <li>Karteikarte 2</li>
                <li>Karteikarte 3</li>
                <li>
                    <button className="d-flex align-items-center p-0">
                        <MaterialIcon icon={'expand_more'}/>
                        <MaterialIcon icon={"folder"}/>
                        <span>Ordner Ebene 2</span>
                    </button>
                    <ul className="nav flex-column pl-md-4">

                        <li>Karteikarte 5</li>
                        <li>Karteikarte 9</li>
                        <li>Karteikarte 312</li>
                        <li className="nav-item">
                            <button className="d-flex align-items-center p-0">
                                <MaterialIcon icon={'chevron_right'}/>
                                <MaterialIcon icon={"folder"}/>
                                <span>Ordner Ebene 3</span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>

        )
    };
}

