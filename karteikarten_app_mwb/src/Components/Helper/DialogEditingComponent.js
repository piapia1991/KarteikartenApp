import React, {Component} from 'react';
import {Dialog, Button, DialogActions, DialogContent, TextField, DialogTitle, Slide} from '@material-ui/core';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export class DialogEditingComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {foldername: ''};
    }


    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={() => this.props.handleClose}
                aria-labelledby="form-dialog-title"
                TransitionComponent={Transition}

            >
                <DialogTitle id="form-dialog-title">Neuer Ordner</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="foldername"
                        label="Name des Ordners"
                        type="text"
                        fullWidth
                        value={this.state.foldername}
                        onChange={e => this.setState({foldername: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.handleClose()} color="primary">
                        Abbrechen
                    </Button>
                    <Button onClick={() => this.saveFolderName()} color="primary">
                        Anlegen
                    </Button>
                </DialogActions>
            </Dialog>
        )
    };

    saveFolderName = () => {
        if(this.state.foldername.length > 0 ){
            this.props.addFolder(this.state.foldername, this.props.targetfolder);
            this.setState({foldername: ''});
        }
        this.props.handleClose();
    }


}