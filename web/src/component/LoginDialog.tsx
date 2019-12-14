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

export default function LoginDialog(props: { open: boolean }) {

    let [open, setOpen] = React.useState(props.open);
    const onCloseDialog = () => setOpen(false);

    return (<div>
        <Dialog open={open} onClose={onCloseDialog} aria-labelledby="form-dialog-title">
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
                <Button onClick={onCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button onClick={onCloseDialog} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    </div>)
}