import React, {Component} from 'react';

export class IndexCardComponent extends Component {


    render() {
            return (
                <React.Fragment>
                    <div className="p-2 col-md-2">
                        <div className="container">
                            <img className="image" alt=""
                                 src="https://www.buero-bedarf-thueringen.de/1336110-thickbox_default/karteikarten-a6-liniert-ws-100st.jpg"/>
                            <div className="text">{this.props.title}</div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
}