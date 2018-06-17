import React, {Component} from 'react';
import {EditingContentComponent} from "./EditingContentComponent";
import {EditingSidebarComponent} from "./EditingSidebarComponent";
import base from "../base";

export class EditingComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {folders: {}};
    }

    componentDidMount() {
        if (this.props.uid) {
            this.folderRef = base.syncState('users/' + this.props.uid + '/folders',
                {
                    context: this,
                    state: 'folders'
                });
        }
    }


    componentWillUnmount() {
        base.removeBinding(this.folderRef);
    }

    render() {
        return (

            <div className="row">
                <EditingSidebarComponent folders={this.state.folders} addFolder={this.addFolder}/>
                <EditingContentComponent/>
            </div>
        )
    };

    addFolder = (name, targetfolderIndex) => {
        const folders = {...this.state.folders};
        if (targetfolderIndex === undefined) {
            folders[`folders${Date.now()}`] = {name: name};
        } else {
            this.changeTargetFolder(name, targetfolderIndex, folders);
        }
        this.setState({folders: folders});
    }

    changeTargetFolder(name, targetfolder, folders) {
        console.log('targetfolder', targetfolder);
        console.log('folders', folders);
        if (folders !== undefined && folders[targetfolder] !== undefined) {
            folders[targetfolder].childfolders = {...folders[targetfolder].childfolders};
            folders[targetfolder].childfolders[`folders${Date.now()}`] = {name: name};
            return true;
        } else {
            for (var folder in folders) {
                if (this.changeTargetFolder(name, targetfolder, folders[folder].childfolders)) {
                    break;
                }
            }
        }
    }

}

