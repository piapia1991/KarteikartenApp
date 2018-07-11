import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Parser from 'html-react-parser';

export class LearningCardComponent extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardContent>
                    {Parser(this.props.htmlContent)}
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
