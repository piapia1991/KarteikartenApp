import React, {Component} from 'react';
import './HeaderComponent.css';
import {LoginComponent} from './LoginComponent';
import {HeaderButtonComponent} from "./HeaderButtonComponent";

export class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar headerbar fixedTop p-0 border-bottom">
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="row">
                        <HeaderButtonComponent link={'/'} title={'Bearbeiten'} icon={'edit'} index={true}/>
                        <HeaderButtonComponent link={'/learning'} title={'Lernen'} icon={'school'}/>
                    </div>
                </div>

                <div className="col-sm-6 col-md-8 col-lg-8">
                    <LoginComponent
                        login={this.props.login}
                        authenticate={this.props.authenticate}
                        logout={this.props.logout}
                    />

                </div>
            </nav>
        )
    };
}

