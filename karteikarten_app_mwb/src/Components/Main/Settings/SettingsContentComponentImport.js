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
                            <Tooltip title={"Hochladen"}>
                                <Button variant="contained" component="span">
                                    <Icon>cloud_upload_icon</Icon>Dateien Ausw&auml;hlen
                                </Button>
                            </Tooltip>
                        </label>
                    </Grid>
                    <Grid item xs={12}  className={'paddingTop-20'}>
                        <Tooltip title={"Best&auml;tigen"}>
                            <Button variant="contained" component="span" onClick={loadFile()}>
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

function loadFile() {
    let input, file, fr;
    let outputdiv = document.getElementById("output");

    if (typeof window.FileReader !== 'function') {
        this.state.outputdiv = "The file API isn't supported on this browser yet.";
    }

    input = document.getElementById('fileinput');
    if (!input) {
        this.state.outputdiv = "Um, couldn't find the fileinput element.";
    }
    else if (!input.files) {
        this.state.outputdiv = "This browser doesn't seem to support the `files` property of file inputs.";
    }
    else if (!input.files[0]) {
        this.state.outputdiv = "Please select a file before clicking 'Load'";
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText() {
        showResult(fr, "Text");

        fr = new FileReader();
        fr.onload = receivedBinary;
        fr.readAsBinaryString(file);
    }

    function receivedBinary() {
        showResult(fr, "Binary");
    }


function showResult(fr, label) {
    let markup, result, n, aByte, byteStr;

    markup = [];
    result = fr.result;
    for (n = 0; n < result.length; ++n) {
        aByte = result.charCodeAt(n);
        byteStr = aByte.toString(16);
        if (byteStr.length < 2) {
            byteStr = "0" + byteStr;
        }
        markup.push(byteStr);
    }
    this.state.outputdiv = label + " (" + result.length + "):";
    this.state.outputdiv = markup.join(" ");
}
}