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
import './formStyle.css';


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
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
  button: {
    height: "40px",
    width: "40px",
    marginLeft: 40
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


const crns = ["Select All","12345", "23455", "31245"];

class EventForm extends React.Component {
  state = {
    eventType: "",
    title: "",
    course: "",
    crn: [],
    leadNotes: "",
    crnNotes: "",
    numOfWeeks: ""
  };

  handleChange = event => {
    this.setState({ crn: event.target.value });
  };
   
  handleTextChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      });
  };
  
  onClickHandler = (e) => {
      console.log(e.currentTarget);
      e.currentTarget.classList.toggle("select");  
  };

   
  render() {
    const { classes, theme } = this.props;

    let daySchedule = (<div>
          
        </div>
        )


    return (
      <div>
        <div>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="event-type">Event Type</InputLabel>
              <Select
                value={this.state.eventType}
                style={{ width: "170px", color: "white", textAlign: "center" }}
                onChange={this.handleChange}
              >
                <MenuItem value="lecture">Lecture</MenuItem>
                <MenuItem value="lab">Lab</MenuItem>
                <MenuItem value="clinical">Clinical</MenuItem>
                <MenuItem value="block_other">Block/Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
                  label="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleTextChange}
                  style={{ width: "120px", margin: 10, width: 250 }}
                />
            <br /> <br />
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
        <div>
        <br/> <br/>
            <TextField
              name="startDate"
              label="Start Date"
              type="date"
              value={this.state.startDate}
              onChange={this.handleTextChange}
              InputLabelProps={{
                shrink: true
              }}
              style={{ width: "220px" }}
            />
            <TextField
              name="endDate"
              label="End Date"
              type="date"
              value={this.state.endDate}
              onChange={this.handleTextChange}
              InputLabelProps={{
                shrink: true
              }}
              style={{ marginLeft: 40, width: "220px" }}
            />
            <br /> <br />
            </div>
        <div>
          <Paper className={classes.paper} elevation={4}>
            <div className={classes.row}>
              <Button
                className={classes.button}
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Sun</p>
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Mon</p>
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
                onDoubleClick = {this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Tue</p>
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
                onDoubleClick = {this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Wed</p>
              </Button>
              <Button
                className={classes.button}
                id=""
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
                onDoubleClick = {this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Thu</p>
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
                onDoubleClick = {this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Fri</p>
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                color={this.state.color}
                onClick={this.onClickHandler}
                onDoubleClick = {this.onClickHandler}
              >
                <p style={{ fontSize: 10 }}>Sat</p>
              </Button>
            </div>
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
          <br/> <br/> 
          <TextField
            multiline
            rows="4"
            label="Lead Notes"
            name="leadNotes"
            value={this.state.leadNotes}
            onChange={this.handleTextChange}
            style={{ width: "500px" }}
          />
          <br/> <br/> <br/>
          <TextField
            multiline
            rows="4"
            label="CRN Notes"
            name="crnNotes"
            value={this.state.crnNotes}
            onChange={this.handleTextChange}
            style={{ width: "500px" }}
          />
        </div>
      </div>
    );
  }
}
EventForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventForm);
