import React, { Component } from "react";
import Button from "material-ui/Button";
import Calendar from "./Calendar";
import AddIcon from "material-ui-icons/Add";
// import RequestForm from "../RequestForm/RequestForm";
import EventForm from "./EventForm/EventForm";
import events from './events';

import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = { 
        events: events,
        openEventForm: false
    };
  }
 
  componentDidMount(){
    //api call to get the list of events
    fetch('http://35.185.78.228/calendar/events')
    .then((resp)=>{
      return resp.json();      
    })
    .then((jsonData)=>{
      let newEvents = jsonData.map((event)=>{
        return {
          id: (event.EventScheduleId + 20),
          title: event.Title || event.Course,
          start: new Date(event.EventStart),
          end: new Date(event.EventEnd)
        };
      }); 
      this.setState({events: this.state.events.concat(newEvents)});
      
    })
    .catch((err)=>{
      console.log("Error parsing response: " + err);
    });
  }
  
  addEvent(newEvent){
    this.setState({events: this.state.events.concat([newEvent])});
  }

  closeEventForm(){
    this.setState({openEventForm: false});
  }

  handleOpenEventForm(){
    this.setState({openEventForm: true});
  }

  render() {
    console.log("Home page: " + this.state.events.length);
    return (
        <div>

        <div id="calendar-container">
          <Calendar events={this.state.events} {...this.props} />
          <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            id="addCourse"
            onClick={this.handleOpenEventForm.bind(this)}
          >
            <AddIcon />
          </Button>
         <EventForm open={this.state.openEventForm} 
            addEvent={this.addEvent.bind(this)} 
            closeEventForm={this.closeEventForm.bind(this)}
          />
        </div>
        </div>
    );
  }
}

export default Home;
