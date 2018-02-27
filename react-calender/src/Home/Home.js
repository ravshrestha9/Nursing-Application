import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Calendar from "../Calendar/Calendar";
import AddIcon from "material-ui-icons/Add";
// import RequestForm from "../RequestForm/RequestForm";
import EventForm from "../EventForm/EventForm";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = { 
        events: {},
        openEventForm: false
    };
  }

  handleOpenEventForm(){
    this.setState({openEventForm: true});
    console.log(this.state.openEventForm);
  }

  handleCloseEventForm(){
    this.setState({openEventForm: false});
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
            onClick={this.handleOpenEventForm.bind(this)}
          >
            <AddIcon />
          </Button>
         <EventForm open={this.state.openEventForm} closeForm = {this.handleCloseEventForm.bind(this)}/>
        </div>
        </div>
    );
  }
}

export default Home;
