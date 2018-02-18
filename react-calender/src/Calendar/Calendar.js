import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuBar from "../Menu/MenuBar"
import "./Calendar.css";

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  state = {
    selectedDay: ""
  };

  render() {
    return (
        <BigCalendar
          selectable
          events={[]}
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
