import React, {Component} from 'react';
import {FolderContentComponent} from "./FolderContentComponent";
import {ContextMenuProvider} from 'react-contexify';
import {FolderButtonComponent} from "./FolderButtonComponent";

export class FolderComponent extends Component {
    icons = [];

    constructor(props) {
        super(props);
        this.state = {folderOpen: false};
    }


    render() {
        return (
            <React.Fragment>
                    <ContextMenuProvider id="menu_id" render={({children, ...rest}) => (
                        <aside {...rest}>
                            <div>
                                {children}
                            </div>
                        </aside>)}
                    >
                        <FolderButtonComponent
                            folderOpen={this.state.folderOpen}
                            changeCurrentfolder={this.props.changeCurrentfolder}
                            index={this.props.index}
                            toggleOpenClose={this.toggleOpenClose}
                            folder={this.props.folder}
                        />
                    </ContextMenuProvider>
                    {(this.state.folderOpen && this.props.folder.childfolders) &&
                    <FolderContentComponent  changeCurrentfolder={this.props.changeCurrentfolder} folderOpen={this.state.folderOpen} childfolders={this.props.folder.childfolders}/>}
            </React.Fragment>
        )
    };

    toggleOpenClose = () => {
        this.setState({
            folderOpen: !this.state.folderOpen
        });
    }
}




