import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuBar from "../Menu/MenuBar"
import "./Calendar.css";

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
      selectedDay: ""
    };
  }

  componentWillMount(){
    //database call to get the list of events
    //eventList = getEvents()
    //this.state.events = eventList
  }

  render() {
    return (
        <BigCalendar
          selectable
          events={this.state.events}
          defaultView="month"
          defaultDate={new Date()}
          onNavigate={date => {
            this.setState({ selectedDay: date });
          }}
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
