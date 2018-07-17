import React, {Component} from 'react';
// import 'react-contexify/dist/ReactContexify.min.css';
// import './DashboardSidebarComponent.css';

import { Link } from 'react-router-dom';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {Icon} from '@material-ui/core';
import PropTypes from "prop-types";


import { ItemTypes } from '../../../Constants';
import { DropTarget } from 'react-dnd';


const folderTarget = {
    drop(props, monitor, component) {
        const {addExistingCardToFolder} = component.props;
        const folderId = component.props.id;
        const cardId = monitor.getItem().cardId;
        addExistingCardToFolder(cardId, folderId);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class DashboardSidebarFolderComponent extends Component {

    render() {
        const { connectDropTarget } = this.props;
        const {id, folder}  = this.props;
        return connectDropTarget(
            <div
                key={id}
            >
                <Link
                    to={"/overview/" + id }
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem>
                        <ListItemIcon>
                            <Icon>folder_icon</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={folder.name}/>
                    </ListItem>
                </Link>
            </div>
        );
    }
}

DashboardSidebarFolderComponent.propTypes = {
    folder: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    addExistingCardToFolder: PropTypes.func.isRequired,
};

export default DropTarget(ItemTypes.CARD, folderTarget, collect)(DashboardSidebarFolderComponent);