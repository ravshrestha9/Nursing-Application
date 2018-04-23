import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { DatePicker } from "@atlaskit/datetime-picker";

import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
// import { Typography } from "material-ui/styles";s

const styles = {
  root: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center',
  }
};

export default class DeadlinePage extends React.Component {
  state = {
    open: false,
    deadline: new Date()
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={styles.root}>
       <div>
         <div>
        <span color="default"> 
          Current Deadline for Event Creation: 
        </span> &nbsp;&nbsp;&nbsp;
        <span> 
          {this.state.deadline.toLocaleDateString()}
        </span>
        </div>
        <br />
        <div style={{textAlign: 'center'}}>
        <Button variant='raised' color='primary' onClick={this.handleClickOpen}>Set Deadline</Button>
        </div>
      </div> 
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Set Deadline for Create Event
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please select a date until which the Lead Instructor can create an
              event for their respective course.
            </DialogContentText>
            <br />
            <DatePicker />

            <div style={{ height: 200 }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Set Deadline
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
