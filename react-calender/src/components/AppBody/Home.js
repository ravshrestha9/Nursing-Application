import React, { Component } from "react";
import Button from "material-ui/Button";
import Calendar from "./Calendar/Calendar";
import AddIcon from "material-ui-icons/Add";
// import RequestForm from "../RequestForm/RequestForm";
import EventFormContainer from "./Containers/EventFormContainer";
import {getCalendarEvents} from '../../services/services';
import PropTypes from 'prop-types';




import "./Home.css";


class Home extends Component {
  
  state = { 
      events: [],
      openEventForm: false,
  };
 
  componentDidMount() {
    //api call to get the list of events

    const {events} = this.context.store;
    if (events.length !== 0) 
      return;
      
    getCalendarEvents()
    .then((response) => {
      let data = response.data;
      let newEvents = data.map((event)=>{
        return {
          id: event.GroupId || event.EventScheduleId,
          title: event.Course + ' ' + 'Rm: ' + event.Room,
          start: new Date(event.EventStart),
          end: new Date(event.EventEnd),
          desc: event.Note1 + " " + event.Note2,
          room: event.Room,
          color: event.Color,
          crn: event.crn
        };
      });   
      this.context.actions.setEvents(newEvents);
    })
    .catch((err)=>{
      console.log("Error parsing response: " + err);
    });
  }
  
  addEvent = (newEvent) => {
    // let curEvents = [...this.state.events];
    this.context.actions.setEvents([newEvent]);
    // this.setState({events: curEvents.concat([newEvent])});
  }

  closeEventForm = ()=>{
    this.setState({openEventForm: false});
  }

  handleOpenEventForm = () => {
    this.setState({openEventForm: true});
  }

  
  getChildContext() {
    let eventFormContexts = {
      openEventForm: this.state.openEventForm,
      handleOpenEventForm: this.handleOpenEventForm,
      view: this.props.currentView
    };
    return eventFormContexts;
  }
  

  render() {
    const { role } = this.context.store.user;
    let button = (
      <div>
        <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            id="addCourse"
            onClick={this.handleOpenEventForm} >
            <AddIcon />
        </Button>
        
      </div>
    )

    if (role === 'student' || role === "instructor") button = null;

    return (
        <div id="calendar-container">
          <Calendar
            events={this.context.store.events}
            onOpenEventForm={this.handleOpenEventForm} 
            {...this.props}
          />
          <EventFormContainer open={this.state.openEventForm} 
            addEvent={this.addEvent} 
            closeEventForm={this.closeEventForm} 
           />
          {button}
        </div>
    );
  }
}

Home.childContextTypes = {
  openEventForm: PropTypes.bool,
  role: PropTypes.string,
  handleOpenEventForm: PropTypes.func,
  view: PropTypes.string

}

Home.contextTypes = {
  store: PropTypes.object,
  actions: PropTypes.object
}

export default Home;
