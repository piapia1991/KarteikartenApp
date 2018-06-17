import React, {Component} from 'react';
import {MaterialIcon} from "./Helper/MaterialIcon";
import {FolderComponent} from "./Helper/FolderComponent";
import 'react-contexify/dist/ReactContexify.min.css';
import {EditingSidebarMenuComponent} from "./EditingSidebarMenuComponent";
import {DialogEditingComponent} from "./Helper/DialogEditingComponent";
import Button from '@material-ui/core/Button';
import './EditingSidebarComponent.css';

export class EditingSidebarComponent extends Component {



    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            dialogMode: undefined,
            dialogTargetfolder: undefined
        };
    }

    render() {
        return (
            <div>
                <nav className="col-md-2 d-none d-md-block sidebar">
                    <div className="sidebar-sticky py-3">

                        <ul className="nav flex-column pl-1">
                            {Object.keys(this.props.folders).map(key => (
                                <FolderComponent
                                    index={key}
                                    name={this.props.folders[key].name}
                                    childfolders={this.props.folders[key].childfolders}
                                    key={key}/>

                            ))
                            }
                        </ul>
                        <div id="buttonRow" className="row d-flex flex-row-reverse">
                            <Button className="m-4 highlightBackground" variant="fab" mini aria-label="add"
                                    onClick={() => this.handleClickDialogOpen('add')}>
                                <MaterialIcon icon={'add'}/>
                            </Button>
                        </div>
                        <EditingSidebarMenuComponent addFolder={this.handleClickDialogOpen}/>
                    </div>
                </nav>
                <DialogEditingComponent open={this.state.dialogOpen} handleClose={this.handleClose}
                                        addFolder={this.props.addFolder} targetfolder={this.state.dialogTargetfolder}
                                        mode={this.state.dialogMode}/>
            </div>
        )
    }
    ;

    handleClickDialogOpen = (mode, targetfolder) => {
        this.setState({dialogOpen: true, dialogMode: mode, dialogTargetfolder: targetfolder});
    };

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

}

