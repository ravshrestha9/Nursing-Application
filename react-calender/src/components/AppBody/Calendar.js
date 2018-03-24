import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
// import Selectable from './selectable'

import "./Calendar.css";

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedDay: ""
    };
  }

  eventStyleGetter = (event, start, end, isSelected) => {
    // var backgroundColor = '#' + event.hexColor;
    var style = {
      backgroundColor: '#720d0d',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#ffffff',
      display: 'block',
      fontSize: '13px',
      fontWeight: 'lighter'

    };
    return {
      style: style
    };
  }

  render() {
    return (
      <div className="calendar">
        <BigCalendar

          // events={this.props.events}
          views={allViews}
          selectable
          view={this.props.currentView}
          showMultiDayTimes
          date={this.props.currentDate}
          onNavigate={this.props.onNavigate}
          toolbar={false}
          popup events={this.props.events}
          style={{ height: "90vh", padding: 0, margin: 0 }}

          eventPropGetter={(this.eventStyleGetter)}// colored theme
          onSelectEvent={(event) => alert(event.id + '\n' + event.title + '\n' + event.start + '\n' + event.end + '\n' + event.desc + '\n' + event.location)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`
            )
          }

        />
      </div>
    );
  } 
}

export default Calendar;

