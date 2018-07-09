import React, {Component} from 'react';
import {Card, CardMedia, CardContent, Typography, Button, CardActions, Icon} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '156.25%', // 16:9
    },
};
export class IndexCardComponent extends Component {


    render() {
            return (
                <React.Fragment>
                    <Card className={styles.card}>
                        <CardMedia className={styles.media}
                                   src="https://www.buero-bedarf-thueringen.de/1336110-thickbox_default/karteikarten-a6-liniert-ws-100st.jpg"
                                   title={this.props.title} />
                        <CardContent>
                            <Typography gutterBottom variant="body2">{this.props.title}</Typography>
                        </CardContent>

                        <CardActions>
                            <Button variant="fab" mini color="secondary" aria-label="add" >
                                <Icon>edit_icon</Icon>
                            </Button>
                            <Button  variant="fab" mini color="primary" aria-label="share">
                                <Icon>share_icon</Icon>
                            </Button>
                        </CardActions>
                    </Card>
                </React.Fragment>
            );
        }
}