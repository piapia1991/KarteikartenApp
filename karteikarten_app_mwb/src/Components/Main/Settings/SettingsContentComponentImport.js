import React, {Component} from 'react';
import {Typography, Button, Tooltip, Grid, Icon} from '@material-ui/core';


export class SettingsContentComponentImport extends Component {
    render() {
        return(
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="title" className={'paddingTop-20'}>Import von Daten</Typography>
                    </Grid>
                    <Grid item xs={12} className={'paddingTop-20'}>
                        <input
                            accept=".txt, .json"
                            style={{display:  "none"}}
                            id="fileinput"
                            type="file"
                        />
                        <label htmlFor="fileinput">
                            <Tooltip title={"Datei Auswählen"}>
                                <Button variant="contained" component="span">
                                    <Icon>cloud_upload_icon</Icon>Datei Ausw&auml;hlen
                                </Button>
                            </Tooltip>
                        </label>
                    </Grid>
                    <Grid item xs={12}  className={'paddingTop-20'}>
                        <Tooltip title={"Best&auml;tigen"}>
                            <Button variant="contained" component="span">
                                <Icon>check_icon</Icon>Best&auml;tigen
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} >
                        <div id={"output"}>

                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    };
}
