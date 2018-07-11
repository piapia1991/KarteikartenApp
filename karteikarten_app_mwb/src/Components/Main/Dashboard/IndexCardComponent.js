import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class IndexCardComponent extends Component {

    render() {
        const Container = withRouter(({ history }) => (
            <div className="container" onClick={() => {
                history.push(`/editing/${this.props.cardId}`);
            }}>
                <img className="image" alt=""
                    src="https://www.buero-bedarf-thueringen.de/1336110-thickbox_default/karteikarten-a6-liniert-ws-100st.jpg" />
                <div className="text">{this.props.title}</div>
            </div>
        ));
        return (
            <React.Fragment>
                <div className="p-2 col-md-2">
                    <Container />
                </div>
            </React.Fragment>
        );
    }
}