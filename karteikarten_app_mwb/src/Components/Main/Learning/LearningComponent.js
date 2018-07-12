import React, {Component} from 'react';
import {LearningSidebarComponent} from "./LearningSidebarComponent";
import LearningContentComponent from "./LearningContentComponent";
import base from "../../../base";
import {Grid} from '@material-ui/core';

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
        let contentComponent = <div role="main"/>;
        let sidebarComponent = <div/>;
        let currentCards = [];

        if (this.state.folders !== undefined) {
            sidebarComponent =
                <LearningSidebarComponent folders={this.state.folders} updateFolder={this.updateFolder}/>;
            currentCards = this.searchCurrentCards(this.state.folders, currentCards);
            if (this.state.cards !== undefined) {
                contentComponent = <LearningContentComponent cards={this.state.cards} currentCardRefs={currentCards}
                                                             uid={this.props.uid}/>;
            }
        }

        return (
            <Grid className={'main'} container>
                <Grid item md={3} lg={2}>
                    {sidebarComponent}
                </Grid>

                <Grid item md={9} lg={10}>
                    {contentComponent}
                </Grid>
            </Grid>
        )
    };

    searchCurrentCards(folders, currentCards) {
        for (let folderKey in folders) {
            if (folders.hasOwnProperty(folderKey)) {
                if (folders[folderKey].checked !== undefined && folders[folderKey].checked === true && folders[folderKey].cards !== undefined) {
                    currentCards = currentCards.concat(folders[folderKey].cards);
                }
                if (folders[folderKey].childfolders !== undefined) {
                    currentCards = this.searchCurrentCards(folders[folderKey].childfolders, currentCards);
                }
            }
        }
        return currentCards;
    }


    updateFolder = (folder, folderIndex) => {
        const folders = {...this.state.folders};
        this.changeTargetFolder(folder, folderIndex, folders);
        this.setState({folders: folders});
    };

    changeTargetFolder = (changedFolder, folderIndex, folders) => {
        if (folders !== undefined && folders[folderIndex] !== undefined) {
            folders[folderIndex] = changedFolder;
        } else {
            for (let folder in folders) {
                if (folders.hasOwnProperty(folder)) {
                    if (this.changeTargetFolder(changedFolder, folderIndex, folders[folder].childfolders)) {
                        break;
                    }
                }
            }
        }

    }
}

