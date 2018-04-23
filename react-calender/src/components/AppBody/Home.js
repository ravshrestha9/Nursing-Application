import React, { Component } from "react";
import Button from "material-ui/Button";
import Calendar from "./Calendar";
import AddIcon from "material-ui-icons/Add";
// import RequestForm from "../RequestForm/RequestForm";
import EventForm from "./EventForm/EventForm";
import events from './events';
import axios from 'axios';
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        events: events,
        openEventForm: false,
        role: 'admin'
    };
  }
 
  // componentDidMount(){
  //   //api call to get the list of events
  //   const {cwid, role} = {...this.props.loginInfo};
  //   let requestURL = 'http://35.185.78.228/calendar/events';

  //   if (role !== 'admin') {
  //     requestURL = `http://35.185.78.228/calendar/events?cwid=${cwid}&role=${role}`;
  //   }
  //   axios({
  //     method: 'get',
  //     url: requestURL
  //   })
  //   .then((response)=>{
  //     let data = response.data;
  //     let newEvents = data.map((event)=>{
  //       return {
  //         id: (event.EventScheduleId + 20),
  //         title: event.Course + ' ' + 'Room: ' + event.location,
  //         start: new Date(event.EventStart),
  //         end: new Date(event.EventEnd),
  //         desc: event.Notes,
  //         location: event.Location
  //       };
  //     }); 
  //     this.setState({events: this.state.events.concat(newEvents)});
      
  //   })
  //   .catch((err)=>{
  //     console.log("Error parsing response: " + err);
  //   });
  // }
  
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
    let button = (
        <div>
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
    )

    if (this.props.loginInfo.role === 'student' || this.props.loginInfo.role === "crnInstructor") button = null;
    return (
        <div id="calendar-container" className={`calendar-${this.props.currentView}`}>
          <Calendar events={this.state.events} {...this.props} />
          {button}
        </div>
    );
  }
}

export default Home;
