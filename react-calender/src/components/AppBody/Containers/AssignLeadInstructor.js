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

const styles = theme => ({
    root: {
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'center'
      },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
      height: "40px !important"
  },
  header:{
    paddingTop: 40,
    textAlign: "center"

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

const crns = ["12345", "23455", "31245"];

class AssignLeadInstructorForm extends React.Component {
  state = {
    course: "",
    crn: [],
    instructor: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMultiSelect = event => {
    this.setState({ crn: event.target.value });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div >
        <Typography
        className={classes.header}
        >
          <h1> Assign Lead Instructor</h1>
        </Typography>
      <div className = {classes.root}>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="course">Course</InputLabel>
            <Select
              value={this.state.course}
              name = "course"
              style={{ width: "170px", textAlign: "center" }}
              onChange={this.handleChange}
            >
              <MenuItem value="lecture">NURS 2004</MenuItem>
              <MenuItem value="lecture">NURS 2009</MenuItem>
              <MenuItem value="lecture">NURS 2010</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-crns">Select CRN/s</InputLabel>
            <Select
              multiple
              value={this.state.crn}
              onChange={this.handleMultiSelect}
              input={<Input id="select-multiple-crns" />}
              renderValue={selected => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {crns.map(crn => (
                <MenuItem key={crn} value={crn}>
                  <Checkbox checked={this.state.crn.indexOf(crn) > -1} />
                  <ListItemText primary={crn} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="instructor">Instructor</InputLabel>
            <Select
              name = "instructor"
              value={this.state.instructor}
              style={{ width: "170px", textAlign: "center" }}
              onChange={this.handleChange}
            >
              <MenuItem value="instructor">Dr. Peveto</MenuItem>
              <MenuItem value="instructor">Donna Glaze</MenuItem>
              <MenuItem value="instructor">Martha Stewart</MenuItem>
            </Select>
          </FormControl>
        </form>
        </div>
        <div style = {{marginLeft: "50%"}}>
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
          onClick={this.onClickHandler}
          onDoubleClick={this.onClickHandler}
        >
          Save
        </Button>
        </div>
      </div>
    );
  }
}

AssignLeadInstructorForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignLeadInstructorForm);
