import React, {Component} from 'react';
import './LoginComponent.css';
import {MaterialIcon} from "./Helper/MaterialIcon";
import {Link} from 'react-router-dom';

export class LoginComponent extends Component {
    render() {
        if(this.props.login == null) {
            return(
                <button className="float-right" onClick={() => this.props.authenticate()}>Sign in</button>
            );
        } else {
            return(
                <div className="d-flex flex-row-reverse align-items-center px-md-3">
                    <span className="px-1" id="loginName">{this.props.login.name}</span>
                    <img alt="" id="loginPicture" className="rounded-circle"
                        src={this.props.login.picture}
                    />
                    <button className="px-1 d-flex align-items-center" onClick={() => this.props.logout()}><MaterialIcon icon={"exit_to_app"}/></button>
                    <Link className="px-1 d-flex align-items-center" to={"/settings"} onClick={() => this.props.deleteUser()}><MaterialIcon icon={"settings"}/></Link>
                </div>
            );
        }
    };
}
