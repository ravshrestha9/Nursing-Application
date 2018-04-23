import React, { Component } from "react";
import Button from "material-ui/Button";
import Calendar from "./Calendar/Calendar";
import AddIcon from "material-ui-icons/Add";
// import RequestForm from "../RequestForm/RequestForm";
import EventFormContainer from "./Containers/EventFormContainer";
import {getCalendarEvents} from '../../services/services';
import PropTypes from 'prop-types';
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";



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
          id: event.EventScheduleId,
          title: event.Course + ' ' + 'Rm: ' + event.Room,
          start: new Date(event.EventStart),
          end: new Date(event.EventEnd),
          desc: event.Note1,
          room: event.Room,
          color: event.Color
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

  exportDocument = () => {
    const input = document.querySelector(".rbc-calendar");
    html2canvas(input).then(canvas => {
      var pdf = new jsPDF("l", "mm", "a4");
      var imgData = canvas.toDataURL("image/jpeg", 1.0);

      // due to lack of documentation; try setting w/h based on unit
      pdf.addImage(imgData, "JPEG", 10, 10, 280, 190 ); // 180x150 mm @ (10,10)mm

      pdf.save("Calendar.pdf");
    });
  };

  getChildContext() {
    let eventFormContexts = {
      openEventForm: this.state.openEventForm,
      handleOpenEventForm: this.handleOpenEventForm,
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
  handleOpenEventForm: PropTypes.func
}

Home.contextTypes = {
  store: PropTypes.object,
  actions: PropTypes.object
}

export default Home;
