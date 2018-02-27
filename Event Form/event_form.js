import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Icon from 'material-ui/Icon';
//import Save from 'material-ui-icons/Save';
import Button from 'material-ui/Button';

const style = {
 width: 500,
};
const padStyle = {
  padding: '0 15px',
}


class event_form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      instructor: '',
      crn: '',
      semester: '',
      day: '',
      starttime: '',
      endtime: '',
      notes: '',
      room: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  finishForm = event =>{
    console.log(event.currentTarget.getAttribute('data-something'));
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 style={padStyle}>Event Form</h1>
        <form className={event_form.container} noValidate>
        <p style={padStyle}>
        <TextField
          id="title"
          label="Title"
          className={event_form.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
          />
        </p>

        <p style={padStyle}>
          <TextField
            id="day"
            label="Select Day:"
            type="date"
            defaultValue={this.state.name}
            onChange={this.handleChange('day')}
            className={event_form.textField}
            InputLabelProps={{
            shrink: true,
        }}
      />
      &nbsp;
       
      <TextField
        id="starttime"
        label="Start Time:"
        type="time"
        defaultValue="07:30"
        onChange={this.handleChange('starttime')}
        className={event_form.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    &nbsp;

      <TextField
        id="endtime"
        label="End Time:"
        type="time"
        defaultValue="08:30"
        onChange={this.handleChange('endtime')}
        className={event_form.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </p>

  <p style={padStyle}>
  <TextField
          id="instructor"
          label="Instructor"
          className={event_form.textField}
          value={this.state.instructor}
          onChange={this.handleChange('instructor')}
          margin="normal"
        />
        &nbsp;

        <TextField
          id="crn"
          label="CRN"
          className={event_form.textField}
          value={this.state.crn}
          onChange={this.handleChange('crn')}
          margin="normal"
        />
        &nbsp;

        <FormControl className={event_form.formControl}>
          <InputLabel htmlFor="roomnumber">Room</InputLabel>
          <Select
            native
            value={this.state.room}
            onChange={this.handleChange('room')}
            inputProps={{
              id: 'roomnumber',
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
        </p>
  <p style={padStyle}>
      <TextField
          id="notes"
          label="Notes"
          multiline
          style={style}
          rows="4"
          defaultValue=""
          onChange={this.handleChange('notes')}
          className={event_form.textField}
          margin='normal'
        />
        </p>
    </form>
    <div style={padStyle}>
    <Button className={event_form.button} variant="raised" size="small" onClick={this.finishForm} data-something="End form">     
        Finish
      </Button>
      </div>
    </div>
    );
  }
}

export default event_form;