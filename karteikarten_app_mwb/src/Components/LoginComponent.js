import React, {Component} from 'react';
import './HeaderComponent.css';

export class LoginComponent extends Component {
    render() {
        const imageStyle = {
            'maxHeight': '32px',
            'maxWidth': '32px',
            'objectFit': 'cover'
        };
        //todo: Componente stylen, inline css moeglicherweise in css verschieben

        if(this.props.login == null) {
            return(
                <button onClick={() => this.props.authenticate()}>Sign in</button>
            );
        } else {
            return(
                <React.Fragment>
                    <span>{this.props.login.name}</span>
                    <img
                        style={imageStyle}
                        src={this.props.login.picture}
                    />
                    <button onClick={() => this.props.logout()}>Sign out</button>
                </React.Fragment>
            );
        }
    };
}
