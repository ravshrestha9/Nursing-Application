import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import MenuBar from "../../components/containers/Menu/MenuBar";

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
      
          events={this.state.events}
          views={allViews}
          view = {this.props.currentView}
          showMultiDayTimes
          date={this.props.currentDate}
          onNavigate ={this.props.onNavigate}
          onView = {(view) => console.log(view)}
          onSelectEvent ={(event) => console.log("event:" + event)}
          style={{ height: "100vh"}}
          components = {{
                toolbar: MenuBar
          }}
        />
    );
  }
}

export default Calendar;
