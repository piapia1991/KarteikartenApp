import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
export class EditorSidebarComponent extends Component {
    render() {
        return (
            <Grid container lg={2} md={3}>
                <Grid item xs>
                    Sidebar
                </Grid>
            </Grid>
        )
    };
}
