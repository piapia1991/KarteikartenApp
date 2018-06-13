import React, {Component} from 'react';
import {MaterialIcon} from "./Helper/MaterialIcon";
import {FolderComponent} from "./Helper/FolderComponent";

export class EditingSidebarComponent extends Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block sidebar">
                <div className="sidebar-sticky py-3">
                    <ul className="nav flex-column pl-1">
                        <li className="nav-item">
                            <FolderComponent/>

                        </li>
                        <li className="nav-item">
                            <button className="d-flex align-items-center p-0">
                                <MaterialIcon icon={'chevron_right'}/>
                                <MaterialIcon icon={"folder"}/>
                                <span>Ordner Ebene 3, der Zweite</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
}

