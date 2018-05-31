import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header_Component.css';

export class Header_Component extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top p-0">
                <div className="col-sm-6 col-md-2">
                    <div className="row">
                        <Link className="navbar-brand col-sm col-md mr-0" to="/editing">Bearbeiten</Link>
                        <Link className="navbar-brand col-sm col-md mr-0" to="/learning">Lernen</Link>
                    </div>
                </div>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/">Sign out</Link>
                    </li>
                </ul>
            </nav>
        )
    };
}

