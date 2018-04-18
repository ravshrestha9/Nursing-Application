import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import EventPopup from "./EventPopup";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import EventFormContext from './event-form-context'; 

import "./Calendar.css";
import CustomEvent from './CustomEvent'

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedEvent: {},
      openEventPopup: false,
      eventPopupPos: {}
    };
  }

  handleCloseEventPopup = ()=>{
    this.setState({openEventPopup: false});
  }

  handleOpenEventPopup = ()=>{
    this.setState({openEventPopup: true});
  }

  eventStyleGetter = (event, start, end, isSelected) => {
    var backgroundColor = event.color;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}

  render() {
    const {onOpenEventForm} = this.props;
    return (
      <BigCalendar
        views={allViews}

        view={this.props.currentView}
        showMultiDayTimes
        date={this.props.currentDate}
        onNavigate={this.props.onNavigate}
        toolbar={false}
        popup
        events={this.props.events}
        style={{ height: "90vh", padding: 0, margin: 0 }}
        components = {{event: CustomEvent}}
        onDoubleClickEvent = {onOpenEventForm}
        onDoubleClickSlot = {()=>console.log('double click')}
        eventPropGetter= {(this.eventStyleGetter)}
      />
    );
  }
}

export default Calendar;

// <EventPopup open={this.state.openEventPopup} 
//         event={this.state.selectedEvent} 
//         position = {this.state.eventPopupPos}
//         onCloseEventPopup = {this.handleCloseEventPopup}
//       />
