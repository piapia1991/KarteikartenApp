import React, {Component} from 'react';
import {Card, Typography} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Parser from 'html-react-parser';

export class LearningCardComponent extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardContent>
                    <Typography component={'div'}>
                    {Parser(this.props.htmlContent)}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

const styles = {
    card: {
        width: '100 %',
        height: '100%'
    }
};
