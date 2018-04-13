import React, { Component } from "react";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Popover from "material-ui/Popover";
import EventPopover from "./EventPopover";
import { EventFormContext } from "./event-form-context";

const styles = {
  content: {
    backgroundColor: "teal",
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

    return (
      <EventFormContext.Consumer>
        {({ openEventForm, handleOpenEventForm, role }) => (
          <React.Fragment>
            <div className={classes.content} onClick={this.handleEventClick}>
              <strong>{moment(event.start).format("ha")}</strong> {event.title}
            </div>
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
        )}
      </EventFormContext.Consumer>
    );
  }
}

export default withStyles(styles)(CustomEvent);
