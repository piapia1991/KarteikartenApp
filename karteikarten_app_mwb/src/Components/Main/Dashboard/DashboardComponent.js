import React, {Component} from 'react';
import DashboardContentComponent from "./DashboardContentComponent";
import Grid from '@material-ui/core/Grid'
import base from "../../../base";
import PropTypes from "prop-types";
import DashboardSidebarComponent from "./DashboardSidebarComponent";
import uuidv4 from "uuid/v4";


export class DashboardComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {user: {}, currentfolder: undefined};
        this.onClickFolder = this.onClickFolder.bind(this);
        this.addCardToFolder = this.addCardToFolder.bind(this);
        this.addExistingCardToFolder = this.addExistingCardToFolder.bind(this);
    }

    componentDidMount() {
        if (this.props.uid) {
            this.folderRef = base.syncState('users/' + this.props.uid,
                {
                    context: this,
                    state: 'user'
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
        ), '/overview');
        console.log(pathString);

        this.context.router.history.push(pathString);
    }

    addCardToFolder() {
        const {router} = this.context;
        const path = router.route.match.params.path;

        const newCardId = uuidv4();

        const user = Object.assign({}, this.state.user);
        const folders = user["folders"];
        let folder = folders[path];

        if (!("cards" in folder))
            folder.cards = [];
        folder["cards"].push(newCardId);

        if (!("cards" in user)) {
            user.cards = {};
        }
        user.cards[newCardId] = {
            title: "",
            backHtml: "",
            frontHtml: ""
        };

        this.setState({
            user: user
        });

        router.history.push(`/editing/${newCardId}`);
    }

    addExistingCardToFolder(cardId, folderId) {
        const user = Object.assign({}, this.state.user);
        const folders = user["folders"];
        let folder = folders[folderId];

        if (!("cards" in folder))
            folder.cards = [];
        if( false === (folder["cards"].includes(cardId))) {
            folder["cards"].push(cardId);

            this.setState({
                user: user
            });

        }
    }


    render() {
        const {router} = this.context;
        const {user} = this.state;
        const path = router.route.match.params.path;

        const folders = user['folders'] || {};
        const folder = folders[path];

        let content = <DashboardContentComponent
            currentfolder={path}
            folder={folder}
            cards={user['cards']}
            uid={this.props.uid}
            path={path}
            addCardToFolder={this.addCardToFolder}
        />;


        return (
            <Grid className={'main'} container>
                <Grid item md={3} lg={2}>
                    <DashboardSidebarComponent
                        changeCurrentfolder={this.changeCurrentfolder}
                        folders={folders}
                        addFolder={this.addFolder}
                        onClickFolder={this.onClickFolder}
                        addExistingCardToFolder={this.addExistingCardToFolder}
                    />
                </Grid>
                <Grid item md={9} lg={10}>
                    {content}
                </Grid>
            </Grid>
        )
    };

    addFolder = (name, targetfolderIndex) => {
        const user = {...this.state.user};
        if (!("folders" in user)) {
            user.folders = {};
        }
        const folders = user.folders;
        if (targetfolderIndex === undefined) {
            folders[`folders${Date.now()}`] = {name: name};
        } else {
            this.changeTargetFolder(name, targetfolderIndex, folders);
        }
        this.setState({
            user: user
        });
    };

    changeTargetFolder(name, targetfolder, folders) {
        if (folders !== undefined && folders[targetfolder] !== undefined) {
            folders[targetfolder].childfolders = {...folders[targetfolder].childfolders};
            folders[targetfolder].childfolders[`folders${Date.now()}`] = {name: name};
            return true;
        } else {
            for (let folder in folders) {
                if (folders.hasOwnProperty(folder)) {
                    if (this.changeTargetFolder(name, targetfolder, folders[folder].childfolders)) {
                        break;
                    }
                }
            }
        }
    }

    changeCurrentfolder = (folder) => {
        this.setState({currentfolder: folder});
    }

}

