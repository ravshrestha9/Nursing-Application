import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import Slide from "material-ui/transitions/Slide";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import { ListItemText } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Chip from "material-ui/Chip";
import Paper from "material-ui/Paper";
import { DatePicker } from '@atlaskit/datetime-picker';
import './formStyle.css';


const styles = theme => ({
  root: {
    padding: '20px',
    backgroundColor: 'silver'
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    height: 200
  }),
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  select: {
    color: "blue"
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};


const crns = ["Select All", "12345", "23455", "31245"];

class EventForm extends React.Component {

  state = {
    eventType: "",
    title: "",
    course: "",
    crn: [],
    leadNotes: "",
    crnNotes: "",
    numOfWeeks: "",
    selectedWeekdays: []
  };

  handleSelectEventType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  


  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="event-type">Event Type</InputLabel>
              <Select
                value={this.state.eventType}
                name='eventType'
                style={{ width: "300px", textAlign: "center" }}
                onChange={this.changeEventType}
              >
                <MenuItem value="lecture">Lecture</MenuItem>
                <MenuItem value="lab">Lab</MenuItem>
                <MenuItem value="clinical">Clinical</MenuItem>
                <MenuItem value="block_other">Block/Other</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              style={{ width: "300px", margin: 10 }}
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="course">Course</InputLabel>
              <Select
                value={this.state.course}
                style={{ width: "170px", color: "white", textAlign: "center" }}
                onChange={this.handleChange}
              >
                <MenuItem value="lecture">Course List</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple">Select CRN</InputLabel>
              <Select
                multiple
                value={this.state.crn}
                onChange={this.handleChange}
                input={<Input id="select-multiple-crns" />}
                MenuProps={MenuProps}
              >
                {crns.map(crn => (
                  <MenuItem key={crn} value={crn}>
                    {crn}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </div>
        <br /> <br />
        <div style={{ display: '', width: '300px'}} >
          <Typography>Start Date</Typography>
          <DatePicker />
        </div>
        <div style={{ display: '', width: '300px'}} >
          <Typography>End Date</Typography>
          <DatePicker />
        </div> <br />
        <Paper className={classes.paper} elevation={3}>
          <WeekDayButtons onSelectWeekday={this.handleSelectWeekday}/>
          <br />
          <div>
            <Typography>
              For
                <TextField
                label="No.of Weeks"
                name="numOfWeeks"
                value={this.state.numOfWeeks}
                onChange={this.handleTextChange}
                style={{ width: "120px", margin: 10 }}
              />
              number of weeks.
              </Typography>
          </div>
        </Paper>
        <br /> <br />
        <TextField
          multiline
          rows="4"
          label="Lead Notes"
          name="leadNotes"
          value={this.state.leadNotes}
          onChange={this.handleTextChange}
          style={{ width: "500px" }}
        />
      </div>
    );
  }
}
EventForm.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(EventForm);
