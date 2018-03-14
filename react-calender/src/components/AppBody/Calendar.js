import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Selectable from './selectable'

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

  render() {
    return (
        <BigCalendar
      
          events={this.state.events}
          views={allViews}
          selectable
          view = {this.props.currentView}
          showMultiDayTimes
          date={this.props.currentDate}
          onNavigate ={this.props.onNavigate}
          onView = {(view) => console.log(view)}
          onSelectEvent ={(event) => console.log("event:" + event)}
          toolbar = {false}
          style={{ height: "90vh", padding: 0, margin:0}}
          onSelectEvent={event => alert(event.id+ '\n'+ event.start + '\n' + event.end)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
        }
        />
    );
  }
}

export default Calendar;

