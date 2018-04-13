import React, { Component } from "react";
import Button from "material-ui/Button";
import Calendar from "./Calendar";
import AddIcon from "material-ui-icons/Add";
// import RequestForm from "../RequestForm/RequestForm";
import EventForm from "./EventForm/EventForm";
import axios from 'axios';
import {EventFormContext} from './event-form-context';

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        events: [],
        openEventForm: false,
        role: 'admin'
    };
  }
 
  componentDidMount(){
    //api call to get the list of events
    const {cwid, role} = {...this.props.loginInfo};
    let requestURL = 'http://35.185.78.228/calendar/events';

    if (role !== 'admin') {
      requestURL = `http://35.185.78.228/calendar/events?cwid=${cwid}&role=${role}`;
    }
    console.log(requestURL);
    axios({
      method: 'get',
      url: requestURL
    })
    .then((response)=>{
      let data = response.data;
      let newEvents = data.map((event)=>{
        return {
          id: (event.EventScheduleId + 20),
          title: event.Course + ' ' + 'Rm: ' + event.Location,
          start: new Date(event.EventStart),
          end: new Date(event.EventEnd),
          desc: event.Notes,
          location: event.Location
        };
      });   
      let curEvents = [this.state.events];
      this.setState({events: curEvents.concat(newEvents)});
    })
    .catch((err)=>{
      console.log("Error parsing response: " + err);
    });
  }
  
  addEvent = (newEvent) => {
    let curEvents = {...this.state.events};
    this.setState({events: curEvents.concat([newEvent])});
  }

  closeEventForm = ()=>{
    this.setState({openEventForm: false});
  }

  handleOpenEventForm = () => {
    this.setState({openEventForm: true});
  }

  
  render() {
    let button = (
      <div>
        <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            id="addCourse"
            onClick={this.handleOpenEventForm}
        >
            <AddIcon />
        </Button>
        <EventForm open={this.state.openEventForm} 
            addEvent={this.addEvent} 
            closeEventForm={this.closeEventForm}
        />
      </div>
    )
    let eventFormContexts = {
      openEventForm: this.state.openEventForm,
      role: this.state.role,
      handleOpenEventForm: this.handleOpenEventForm,
    };

    if (this.props.loginInfo.role === 'student' || this.props.loginInfo.role === "crnInstructor") button = null;
    return (
        <div id="calendar-container">
          <EventFormContext.Provider value={eventFormContexts} >
              <Calendar
                events={this.state.events}
                onOpenEventForm={this.handleOpenEventForm} 
                {...this.props}
              />
          </EventFormContext.Provider>
          {button}
        </div>
    );
  }
}

export default Home;
