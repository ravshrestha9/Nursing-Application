import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuBar from "../Menu/MenuBar";

import "./Calendar.css";

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
      selectedDay: ""
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ events: newProps.events });
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
          view = {this.props.currentView}
          step={60}
          showMultiDayTimes
          date={this.props.currentDate}
          onNavigate ={this.props.onNavigate}
          onView = {(view) => console.log(view)}
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
