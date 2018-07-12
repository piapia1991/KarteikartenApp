import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Icon, Tooltip, Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import karteikarte from "../../../images/Karteikarte.svg";

const styles = () =>({
    card: {
        minHeight: 120,
        backgroundImage: "url("+karteikarte +")",
        backgroundPosition: "0px 3px",
        backgroundSize: "100%",
    },

});

class IndexCardComponent extends Component {

    render() {
        const {classes} = this.props;
        const WithRouter = withRouter(({ history }) => (
            <Grid item sm={12} md={6} lg={4}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container alignItems={'stretch'}>
                            <Grid item xs>
                                <Typography gutterBottom variant="body2">{this.props.title}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>

                    <CardActions>
                        <Grid container spacing={16}>
                            <Grid item xs={10} />
                            <Grid item xs={2}>
                                <Tooltip id="tooltip-fab" title="Bearbeiten">
                                    <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => history.push(`/editing/${this.props.cardId}`)} >
                                        <Icon>edit_icon</Icon>
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