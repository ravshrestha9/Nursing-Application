import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import Slide from "material-ui/transitions/Slide";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  formBody: {
    marginLeft: 20
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class EventForm extends React.Component {
  state = {
    open: false,
    title: "",
    course: "",
    CRN: "",
    instructor: "",
    attendees: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
    eventType: "",
    notes: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Add Event
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <br />
          <div id="form-body" className={classes.formBody}>
            <TextField
              label="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
              style={{ width: "500px" }}
            />
            <br /> <br />
            <TextField
              label="Semester"
              name="semester"
              value={this.state.semester}
              onChange={this.handleChange.bind(this)}
              style={{ width: "220px" }}
            /> <br /> <br />
            <TextField
              label="Course"
              name="course"
              value={this.state.course}
              onChange={this.handleChange.bind(this)}
              style={{ width: "220px" }}
            />
            <TextField
              label="CRN"
              name="CRN"
              value={this.state.CRN}
              onChange={this.handleChange.bind(this)}
              style={{ width: "220px", marginLeft: 50}}
            />
            <br /> <br />
            <TextField
              label="Instructor"
              name="instructor"
              value={this.state.instructor}
              onChange={this.handleChange.bind(this)}
              style={{ width: "220px" }}
            /> <br /> <br/>
            <TextField
              label="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange.bind(this)}
              style={{ width: "220px" }}
            />
            <TextField
              label="Number of Attendees"
              name="attendees"
              value={this.state.attendees}
              onChange={this.handleChange.bind(this)}
              style={{ width: "220px", marginLeft: "50px"} }
            /> <br/> <br /> <br/>
            <TextField
              name = "startDate"
              label="Start Date"
              type="date"
              value={this.state.startDate}
              onChange={this.handleChange.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "220px"}}
            />
            <TextField
              name="startTime"
              label="Start Time"
              type="time"
              value={this.state.startTime}
              onChange={this.handleChange.bind(this)}
              style={{ width:"220px",marginLeft: "50px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <br /> <br /> <br />
            <TextField
              name="endDate"
              label="End Date"
              type="date"
              value={this.state.endDate}
              onChange={this.handleChange.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
              style={{width:"220px"}}
            />
            <TextField
              name="endTime"
              label="End Time"
              type="time"
              value={this.state.endTime}
              onChange={this.handleChange.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginLeft:"50px", width: "220px" }}
            /> <br /> <br />
            <TextField
              multiline
              rows="4"
              label="Notes"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange.bind(this)}
              style={{ width: "500px" }}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

EventForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventForm);
