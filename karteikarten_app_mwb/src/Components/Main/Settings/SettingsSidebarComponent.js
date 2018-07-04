import React, {Component} from 'react';

export class SettingsSidebarComponent extends Component {
    render() {
        return(
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active">
                                Dashboard <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Orders
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Customers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Reports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Integrations
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
}

