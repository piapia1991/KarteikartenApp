import React, {Component} from 'react';
import {LearningSidebarComponent} from "./LearningSidebarComponent";
import LearningContentComponent from "./LearningContentComponent";
import base from "../../../base";

export class LearningComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {cards: undefined, folders: undefined}
    }

    componentDidMount() {
        if (this.props.uid) {
            this.cardsRef = base.syncState('users/' + this.props.uid + '/cards',
                {
                    context: this,
                    state: 'cards'
                });
            this.folderRef = base.syncState('users/' + this.props.uid + '/folders',
                {
                    context: this,
                    state: 'folders'
                });
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.cardsRef);
        base.removeBinding(this.folderRef);
    }


    render() {
        let contentComponent = <div role="main"></div>;
        let sidebarComponent = <div></div>
        if(this.state.cards !== undefined){
            contentComponent = <LearningContentComponent cards={this.state.cards} uid={this.props.uid}/>;
        }
        if(this.state.folders !== undefined){
            sidebarComponent = <LearningSidebarComponent folders={this.state.folders}/>
        }
        return (
            <div className="row">
                {contentComponent}
                {sidebarComponent}
            </div>
        )
    };
}

