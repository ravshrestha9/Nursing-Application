import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Calendar from "../Calendar/Calendar";
import AddIcon from "material-ui-icons/Add";


import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = { 
        events: {},
        openForm: false, 
        openRequestForm: false
    };
  }

  handleClick(){
    this.setState({openRequestForm: true});
  }

  render() {
    return (
        <div>
        
        <div id="calendar-container">
          <Calendar schedules={this.props.schedules} />
          <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            id="addCourse"
            onClick={this.handleClick()}
          >
            <AddIcon />
          </Button>
          

        </div>
        </div>
    );
  }
}

export default Home;
