import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Icon, Tooltip, Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";

const styles = () =>({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class IndexCardComponent extends Component {

    render() {
        const {classes} = this.props;
        const WithRouter = withRouter(({ history }) => (
            <Grid item sm={12} md={6} lg={4} className="marginRight-10">
                <Card className={classes.card}>
                    <CardMedia className={classes.media}
                        image="https://www.buero-bedarf-thueringen.de/1336110-thickbox_default/karteikarten-a6-liniert-ws-100st.jpg"
                        title="test" />
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