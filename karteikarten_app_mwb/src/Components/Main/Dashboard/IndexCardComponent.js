import React, {Component} from 'react';
import {Card, CardMedia, CardContent, Typography, Button, CardActions, Icon, Tooltip, Grid} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};
export class IndexCardComponent extends Component {


    render() {
            return (
                <React.Fragment>
                    <Card className={styles.card}>
                        <CardMedia classes={styles.media}
                                   image="https://www.buero-bedarf-thueringen.de/1336110-thickbox_default/karteikarten-a6-liniert-ws-100st.jpg"
                                   title="test" />
                        <CardContent>
                            <Typography gutterBottom variant="body2">{this.props.title}</Typography>
                        </CardContent>

                        <CardActions>
                            <Grid container spacing={24}>
                                <Grid item xs={8}/>
                                <Grid item xs={2}>
                                    <Tooltip id="tooltip-fab" title="Bearbeiten">
                                        <Button variant="fab" mini color="secondary" aria-label="add" >
                                            <Icon>edit_icon</Icon>
                                        </Button>
                                    </Tooltip>
                                </Grid>
                                <Grid item  xs={2}>

                                    <Tooltip id="tooltip-fab" title="Teilen">
                                        <Button  variant="fab" mini color="primary" aria-label="share">
                                            <Icon>share_icon</Icon>
                                        </Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </React.Fragment>
            );
        }
}