import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardActions, Icon, Tooltip, Grid } from '@material-ui/core';
import PropTypes from "prop-types";

import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../../Constants'

import {withStyles} from "@material-ui/core/styles";
import karteikarte from "../../../images/Karteikarte.svg";

const styles = () =>({
    media: {
        backgroundImage: "url("+karteikarte+")",
        backgroundSize: "100% 337%",
        backgroundPosition: "0px 10px",
    },
});

const cardSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const item = { cardId: props.cardId };
        return item;
    },
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class IndexCardComponent extends Component {

    render() {
        const { connectDragSource } = this.props;
        const {classes} = this.props;
        const WithRouter = withRouter(({ history }) => (
                <Card className={classes.media}>

                    <CardContent>
                        <Typography gutterBottom variant="body2">{this.props.title}</Typography>
                    </CardContent>

                    <CardActions>
                        <Grid container spacing={16}>
                            <Grid item xs={8} />
                            <Grid item xs={2}>
                                <Tooltip id="tooltip-fab" title="Bearbeiten">
                                    <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => history.push(`/editing/${this.props.cardId}`)} >
                                        <Icon>edit_icon</Icon>
                                    </Button>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={2}>

                                <Tooltip id="tooltip-fab" title="Teilen">
                                    <Button variant="fab" mini color="primary" aria-label="share">
                                        <Icon>share_icon</Icon>
                                    </Button>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
        ));
        return connectDragSource(
            <div>
                <WithRouter />
            </div>
        );
    }
}

IndexCardComponent.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default
    (withStyles(styles)(DragSource(ItemTypes.CARD, cardSource, collect)(IndexCardComponent)))