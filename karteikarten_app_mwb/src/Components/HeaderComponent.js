import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HeaderComponent.css';
import {LoginComponent} from './LoginComponent';

export class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixedTop p-0">
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="row">
                        <Link className="navbar-brand col-sm col-md-6 mr-0" to="/editing">Bearbeiten</Link>
                        <Link className="navbar-brand col-sm col-md-6 mr-0" to="/learning">Lernen</Link>
                    </div>
                </div>

                <div className="navbar-nav col-sm-6 col-md-6 col-lg-5 float-right">
                    <div className="text-nowrap">
                        {/*<Link className="nav-link" to="/">Sign out</Link>*/}
                        <LoginComponent
                            login={this.props.login}
                            authenticate={this.props.authenticate}
                            logout={this.props.logout}
                            deleteUser={this.props.deleteUser}
                        />
                    </div>
                </div>
            </nav>
        )
    };
}

