import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

export default function LoginDialog(props: { open: boolean, onClose: () => void }) {

    return (<div>
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.onClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    </div>)
}