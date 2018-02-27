import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import Icon from "material-ui/Icon";
//import Save from 'material-ui-icons/Save';
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";

const style = {
  width: 500
};
const padStyle = {
  padding: "0 15px"
};

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      instructor: "",
      crn: "",
      semester: "",
      day: "",
      starttime: "",
      endtime: "",
      notes: "",
      room: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClose() {
    this.setState({ open: false });
    this.props.closeForm();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ open: newProps.open });
  }

  // finishForm = event =>{
  //   console.log(event.currentTarget.getAttribute('data-something'));
  // }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        title="Event Form"
        open={this.state.open}
        onClose={this.handleClose.bind(this)}
        fullScreen
        style={{
          textAlign: "center"
        }}
      >
        <form className={"dd"} noValidate>
          <div style={padStyle}>
            <TextField
              id="title"
              label="Title"
              className={EventForm.textField}
              value={this.state.title}
              onChange={this.handleChange("title")}
              margin="normal"
            />
          </div>

          <div style={padStyle}>
            <TextField
              id="day"
              label="Select Day:"
              type="date"
              defaultValue={this.state.name}
              onChange={this.handleChange("day")}
              className={"dd"}
              InputLabelProps={{
                shrink: true
              }}
            />
            &nbsp;
            <TextField
              id="starttime"
              label="Start Time:"
              type="time"
              defaultValue="07:30"
              onChange={this.handleChange("starttime")}
              className={"dd"}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
            &nbsp;
            <TextField
              id="endtime"
              label="End Time:"
              type="time"
              defaultValue="08:30"
              onChange={this.handleChange("endtime")}
              className={"dd"}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </div>
          <div style={padStyle}>
            <TextField
              id="instructor"
              label="Instructor"
              className={"dd"}
              value={this.state.instructor}
              onChange={this.handleChange("instructor")}
              margin="normal"
            />
            &nbsp;
            <TextField
              id="course"
              label="Course"
              className={EventForm.textField}
              value={this.state.crn}
              onChange={this.handleChange("crn")}
              margin="normal"
            />
            &nbsp;
            <FormControl className={EventForm.formControl}>
              <InputLabel htmlFor="roomnumber">Room</InputLabel>
              <Select
                native
                value={this.state.room}
                onChange={this.handleChange("room")}
                inputProps={{
                  id: "roomnumber"
                }}
              >
                <option value="" />
                <option>Rm-107</option>
                <option>Rm-218</option>
                <option>Rm-236</option>
                <option>Rm-242</option>
                <option>Rm-325</option>
                <option>Rm-340</option>
              </Select>
            </FormControl>
          </div>
          <div style={padStyle}>
            <TextField
              id="notes"
              label="Notes"
              multiline
              style={style}
              rows="4"
              defaultValue=""
              onChange={this.handleChange("notes")}
              className={EventForm.textField}
              margin="normal"
            />
          </div>
        </form>
        <div style={padStyle}>
          <Button
            className={EventForm.button}
            variant="raised"
            size="small"
            onClick={this.finishForm}
            data-something="End form"
          >
            Submit
          </Button>
        </div>
      </Dialog>
    );
  }
}

export default EventForm;
