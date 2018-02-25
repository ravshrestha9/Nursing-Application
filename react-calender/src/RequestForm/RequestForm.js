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

import "./Form.css";

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: false
    };
  }

  // componentDidMount () {
  //     this.setState({open: this.props.showForm});
  // }

  handleChange = (event) => this.setState({ value: event.target.value });

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
          height: "100vh !important",
          maxHeight: "100vh",
          textAlign: "center"
        }}
      >
          <Select
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: 300 }}
          autoWidth={false}
          openImmediately={false}
          >
          <MenuItem value={0}>Select Semester</MenuItem>
          <MenuItem value={1}>Semester 1</MenuItem>
          <MenuItem value={2}>Semester 2</MenuItem>
          <MenuItem value={3}>Semester 3</MenuItem>
          <MenuItem value={4}>Semester 4</MenuItem>
          <MenuItem value={5}>Semester 5</MenuItem>
        </Select>
      </Dialog>
    );
  }
}

export default RequestForm;
