import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';


export default class Form extends React.Component{
    state ={
        courseNumber: '',
        semester: '',
        semesterYear: '',
        meetDays:'',     
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    

render(){
    const {classes} = this.props;
    return (
        <form className="{classes.container}" noValidate autoComplete="off">
        <TextField
          id="courseName"
          label="Course"
          className="{classes.textField}"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        
        <TextField
          id="courseName"
          label="Course Name"
          className="{classes.textField}"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        
        <TextField
          id="courseName"
          label="Day of Class"
          className="{classes.textField}"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />   
        </form> 
    );
}
}

