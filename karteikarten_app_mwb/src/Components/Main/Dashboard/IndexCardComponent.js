import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardActions, Icon, Tooltip, Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import karteikarte from "../../../images/Karteikarte.svg";

const styles = () =>({
    media: {
        backgroundImage: "url("+karteikarte+")",
        backgroundSize: "100% 337%",
        backgroundPosition: "0px 10px",
    },
});

class IndexCardComponent extends Component {

    render() {
        const {classes} = this.props;
        const WithRouter = withRouter(({ history }) => (
            <Grid item sm={12} md={6} lg={4} className="marginRight-10 paddingBottom-20">
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
            </Grid>
        ));
        return <WithRouter /> ;
    }
}
IndexCardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexCardComponent)