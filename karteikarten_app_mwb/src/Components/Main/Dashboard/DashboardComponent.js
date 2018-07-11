import React, {Component} from 'react';
import {DashboardContentComponent} from "./DashboardContentComponent";
import {DashboardSidebarComponent} from "./DashboardSidebarComponent";
import Grid from '@material-ui/core/Grid'
import base from "../../../base";
import PropTypes from "prop-types";


export class DashboardComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {folders: {}, currentfolder: undefined};
        this.onClickFolder = this.onClickFolder.bind(this);
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


    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired
            }).isRequired,
            staticContext: PropTypes.object
        }).isRequired
    };

    onClickFolder(path) {
        console.log(path);
        const pathString = path.reduce((accumulator, currentValue) => (
            accumulator + '/' + currentValue
        ),'/overview');
        console.log(pathString);

        this.context.router.history.push(pathString);
    }

    render() {
        const path = this.context.router.route.match.params.path;
        const data = [
            {title: "myBook", id: 1, data: "myData"},
            {title: "myBook2", id: 2, data: "myData2"},
            {title: "myBook3", id: 3, data: "myData3"},
            {title: "myBook4", id: 4, data: "myData4"},
            {title: "myBook5", id: 5, data: "myData5"},
            {title: "myBook6", id: 6, data: "myData6"},
            // {title: "myBook7", id: 7, data: "myData7"},
            {title: "myBook8", id: 8, data: "myData8"}
        ]
        return (
            <Grid container xs={12}>
                <DashboardSidebarComponent
                    changeCurrentfolder={this.changeCurrentfolder}
                    folders={this.state.folders}
                    addFolder={this.addFolder}
                    onClickFolder={this.onClickFolder}
                />
                <DashboardContentComponent
                    currentfolder={this.state.currentfolder}
                    uid={this.props.uid}
                    data={data}
                    path={path}
                />
            </Grid>
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

    changeCurrentfolder = (folder)=>{
        this.setState({currentfolder: folder});
    }

}

