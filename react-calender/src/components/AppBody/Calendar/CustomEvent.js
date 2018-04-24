import React, { Component } from "react";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Popover from "material-ui/Popover";
import EventPopover from "./EventPopover";
// import { EventFormContext } from "../event-form-context";
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: "12px"
  }
};

let timer = 0;

class CustomEvent extends React.Component {
  state = { openEventPopover: false };

  handleEventClick = event => {
    // event.preventDefault();
    this.setState({
      openEventPopover: true,
      anchorEl: event.target
    });
  };

  handleRequestClose = (e, callback) => {
    if (callback) {
      this.setState(
        {
          openEventPopover: false
        },
        callback
      );
    } else {
      this.setState({
        openEventPopover: false
      });
    }
  };

  render() {
    const event = this.props.event;
    const { classes } = this.props;
    const { openEventPopover, anchorEl } = this.state;
    const {openEventForm, handleOpenEventForm, view} = this.context;
    // <EventFormContext.Consumer>
    // {({ openEventForm, handleOpenEventForm, role }) => (
      let monthViewCustomEvent = (
        <div className={classes.content} onClick={this.handleEventClick}>
          <strong>{moment(event.start).format("ha")}</strong> {event.title}
        </div>
        )
    
        let otherViewCustomEvent = (
          <div className={classes.content} onClick={this.handleEventClick}>
             {event.title} Desc:{event.desc}
          </div>
          )
    
          let agendaViewCustomEvent = (
            <div className={classes.content} onClick={this.handleEventClick}>
               {event.title} 
            </div>
            )

    return (
          <React.Fragment>
            {view === 'month' && monthViewCustomEvent}
           {(view === 'week' || view === 'day') && otherViewCustomEvent}
           {view === 'agenda' && agendaViewCustomEvent}
            <Popover
              open={openEventPopover}
              anchorEl={anchorEl}
              onClose={e => this.handleRequestClose(e)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              disableRestoreFocus
            >
              <div>
                <EventPopover
                  event={event}
                  onCloseEventPopover={this.handleRequestClose}
                  handleOpenEventForm={handleOpenEventForm}
                  {...this.props}
                />
              </div>
            </Popover>
          </React.Fragment>
      );
    // )}
      // </EventFormContext.Consumer>
  }
}

CustomEvent.contextTypes = {
  openEventForm: PropTypes.bool,
  handleOpenEventForm: PropTypes.func,
  view: PropTypes.string
}

export default withStyles(styles)(CustomEvent);
