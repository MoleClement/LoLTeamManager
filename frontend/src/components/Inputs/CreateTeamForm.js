import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ApiLTM from "../../Apis/ApiLTM";

export default function CreateTeamForm(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleCreate = () => {

        const apiLTM = new ApiLTM();

        if (name !== "")
            apiLTM.createTeam(name).then(response => {
                apiLTM.addTeamToCoach(props.coachId, response.data._id).then(response => {
                })
                    .catch(onerror => {

                    });
            }).catch(onerror => {

            });
        ///Call via props the function from the parent to update the team state and refresh
        handleClose();
        props.onCreateTeam();
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create Team
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Team</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create a new team please refer the name ! The new team will be empty, you'll have to add
                        players manually or from JSon file.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Team Name"
                        type="name"
                        fullWidth
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}