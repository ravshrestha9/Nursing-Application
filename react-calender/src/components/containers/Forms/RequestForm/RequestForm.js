import React from "react";
import ReactDOM from "react-dom";
import TextField from "material-ui/TextField";
// import DropDownMenu from 'material-ui/DropDownMenu';
import Select from "material-ui/Select";
// import MenuItem from 'material-ui/MenuItem';
import { MenuItem } from "material-ui/Menu";
// import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import Dialog from "material-ui/Dialog";
import { Button } from "material-ui/Button";

import "./RequestForm.css";

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: false,
      courseName: '',
      crn: '',
      semester: '',
      day:'',
      time: '',
      notes: '',   
    };
  }

  // componentDidMount () {
  //     this.setState({open: this.props.showForm});
  // }

  //handleChange = (event) => this.setState({ value: event.target.value });

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
     this.props.closeForm();
  };

  componentWillReceiveProps(newProps) {
    this.setState({ open: newProps.open });
  }

  render() {
    // console.log("State in Form: " + this.props.open);
    return (
      // contentStyle={{ width: '70%'}}
      <Dialog
        title="Request Form"
        open={this.state.open}
        onClose={this.handleClose.bind(this)}
        fullScreen= {false}
        style={{
          textAlign: "center",
          
        }}
      >
         <TextField
          id="courseName"
          label="Course"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          style = {{width: '150px'}}
        />
        
        <TextField
          id="crn"
          label="CRN"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          style = {{width: '300px'}}
        />

        <Select
          value={this.state.value}
          onChange={this.handleChange}
          // style={{ width: 500 }}
          autoWidth={true}
          openImmediately={false}
          >
          <MenuItem value={0}>Select Semester</MenuItem>
          <MenuItem value={1}>Semester 1</MenuItem>
          <MenuItem value={2}>Semester 2</MenuItem>
          <MenuItem value={3}>Semester 3</MenuItem>
          <MenuItem value={4}>Semester 4</MenuItem>
          <MenuItem value={5}>Semester 5</MenuItem>
        </Select>
        
        <TextField
          id="courseName"
          label="Day of Class"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          style = {{width: '10px'}}
        />   
      
          
      </Dialog>
    );
  }
}

export default RequestForm;