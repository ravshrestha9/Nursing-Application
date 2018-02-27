import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuBar from "../Menu/MenuBar";
import events from './events';
import "./Calendar.css";

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: events,
      selectedDay: ""
    };
  }

  componentWillMount(){
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
      this.setState({events: events.concat(newEvents)});
    })
    .catch((err)=>{
      console.err("Error parsing response: " + err);
    });
  }


  render() {
    return (
        <BigCalendar
          // selectable
          events={this.state.events}
          // defaultView="month"
          // defaultDate={new Date()}
          // onNavigate={date => {
          //   this.setState({ selectedDay: date });
          // }}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2015, 3, 1)}
          onNavigate ={(date) => {this.setState({ selectedDate: date})}}
          onSelectEvent ={(event) => console.log("event:" + event)}
          style={{ height: "100vh"}}
          components = {{
                toolbar: MenuBar
          }}
          //startAccessor = 'startDate'
          //endAccessor = 'endDate'
        />
    );
  }
}

export default Calendar;
