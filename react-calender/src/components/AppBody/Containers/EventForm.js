import React from "react";
import PropTypes from "prop-types";
import {
  withStyles
} from "material-ui/styles";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import Slide from "material-ui/transitions/Slide";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl, FormControlLabel, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import Chip from 'material-ui/Chip';
import { ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import TimePicker from "material-ui-pickers/TimePicker";
import DatePicker from "material-ui-pickers/DatePicker";
import DateTimePicker from "material-ui-pickers/DateTimePicker";


import FindRoom from "./FindRoom"; 
import Switch from 'material-ui/Switch';
import RepeatSection from './RepeatSection';
// import {DatePickers, TimePickers, DateAndTimePickers} from 'material-ui';

import './formStyle.css';

const styles = (theme) => ({
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  },
  form: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start'
  },
  formLeft: {
    flexBasis: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
    paddingTop: 0,
    minWidth: 200,
    marginRight: 50
  },
  formLeftPaper: {
    padding: 30
  },
  formRight:{
    flexBasis: '40%',
    minWidth: 200
  },
  formBody: {
    paddingLeft: 20
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    // marginTop: theme.spacing.unit * 2
  },
  select: {
    color: "blue"
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

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


class EventForm extends React.Component {
  state = {
      crns: ["12345", "23455", "31245"],
      selected: [],
      course: 'NURS 3009'
  };

  handleCourseSelect = (course) => {

  }

  // mapIDtoCRN = () => {
  //   let crns  = [];
  //   this.props.selectedCrn.forEach((id) => {
      
  //     let intId = parseInt(id);
  //     console.log("cenvert " + id + " to number: ", intId);
  //     crns.push(this.props.idToSection[intId]);
  //   })
  //   console.log(crns);
  //   return crns;
  // }

  getCourseValue = () => {
    return "QWE";
  }

  render() {
    const { classes } = this.props;
    const {open, course:courses, repeat, startDate, endDate, selectedWeekdays, numOfWeeks, startTime, endTime, onFormClose, 
      onEventSave, onInputChange, onSaveWeekDay, onDateTimeChange} = this.props;

    
    return (
      <div>
        <Dialog
          fullScreen
          open={open}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={onFormClose}
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
              <Button color="inherit" onClick={this.props.onEventSave}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <br />
          <div id="form-body" className={classes.formBody}>
              <form className={classes.form} autoComplete="off">
                <div className={classes.formLeft}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="event-type">Event Type</InputLabel>
                      <Select
                        value={this.props.eventType}
                        name='eventType'
                        style={{textAlign: "center" }}
                        onChange={onInputChange('eventType')}
                      >
                        <MenuItem value="Lecture">Lecture</MenuItem>
                        <MenuItem value="Exam">Exam</MenuItem>
                        <MenuItem value="Lab">Lab</MenuItem>
                        <MenuItem value="Clinical">Clinical</MenuItem>
                        <MenuItem value="Block/Other">Block/Other</MenuItem>
                      </Select>
                    </FormControl>
                    <br /> <br />

                    <TextField
                      placeholder="Title"
                      name="title"
                      value={this.props.title}
                      onChange={onInputChange('title')}
                    />
                    <br /> <br />

                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="course">Select Course</InputLabel>
                      <Select
                        name='course'
                        value={this.props.selectedCourse}
                        style={{ textAlign: "center" }}
                        onChange={onInputChange('course')}
                      > 
                        {Object.keys(this.props.course).map((course, index)=> (
                          <MenuItem key={index} value={course}>{course}</MenuItem>
                        ))}
                      </Select>
                    </FormControl> <br /> <br />

                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="select-multiple-crn">Select CRN</InputLabel>
                      <Select
                        multiple
                        name="crn"
                        value={this.props.selectedCrn}
                        onChange={onInputChange('crn')}
                        style={{textAlign: "center" }}
                        input={<Input id="select-multiple-crn" placeholder="CRN" />}
                        renderValue={selected => {
                          console.log(selected);
                          return (
                          <div className={classes.chips}>
                            {selected.map((value,index) => <Chip key={index} label={value} className={classes.chip} />)}
                          </div>
                        )}}
                        MenuProps={MenuProps}
                      >
                        {this.props.selectedCourse ? this.props.course[this.props.selectedCourse].map(crn => (
                          <MenuItem key={crn} value={crn}>
                            <Checkbox checked={this.props.selectedCrn.indexOf(crn) > -1} />
                            <ListItemText primary={crn} />
                          </MenuItem>
                        )) : null}
                      </Select>
                    </FormControl>
                      
                    <br /> <br />
                    <div className= {classes.formControl} >
                      <Typography style={{color: 'gray'}}>Start</Typography>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <div className="pickers">
                            <DatePicker value={this.props.startDate} name="startDate" onChange={onDateTimeChange('startDate')} />
                            {!this.props.repeat && (<TimePicker value={this.props.startTime} name="startTime" onChange={onDateTimeChange('startTime')} />)}
                          </div>
                        </MuiPickersUtilsProvider>
                    </div> <br /> <br />

                    <div className= {classes.formControl}>
                      <Typography style={{color: 'gray'}}>End</Typography>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <div className="pickers">
                            <DatePicker value={this.props.endDate} name="endDate" onChange={onDateTimeChange('endDate')}/>
                            {!this.props.repeat && <TimePicker value={this.props.endTime} name="endTime" onChange={onDateTimeChange('endTime')} />}
                          </div>
                        </MuiPickersUtilsProvider>
                    </div> <br /> <br />
                    <FindRoom 
                      onSelectRoom = {this.props.onSelectRoom}
                      selectedRoom = {this.props.selectedRoom}
                      calculateRoomTimes = {this.props.calculateRoomTimes}
                    />
                </div>

                <div className={classes.formRight}>
                    <TextField
                          multiline
                          rows="4"
                          label="Notes"
                          name="leadNotes"
                          value={this.props.leadNotes}
                          style={{width: '100%'}}
                          onChange={onInputChange('note')}
                     /> <br /> <br />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.props.repeat}
                          onChange={onInputChange('repeat')}
                          value="repeat"
                          name="repeat"
                        />
                      }
                      label="Repeat"
                    />
                    <RepeatSection 
                      display = {this.props.repeat}
                      numOfWeeks = {this.props.numOfWeeks}
                      onInputChange = {onInputChange}
                      onSaveWeekDay = {onSaveWeekDay}
                      selected = {this.props.selectedWeekdays}
                    />
                </div>
              </form>
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