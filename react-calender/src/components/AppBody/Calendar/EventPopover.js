import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import CreateIcon from "material-ui-icons/Create";
import DeleteIcon from "material-ui-icons/Delete";
import MoreVertIcon from "material-ui-icons/MoreVert";
import CloseIcon from "material-ui-icons/Close";
import IconButton from "material-ui/IconButton";
import HomeIcon from "material-ui-icons/Home";
import AccessTimeIcon from "material-ui-icons/AccessTime";
import DateRangeIcon from "material-ui-icons/DateRange";
import Menu, { MenuItem } from "material-ui/Menu";
import EventNoteIcon from "material-ui-icons/EventNote";

const styles = {
  card: {
    width: 430
  },
  title: {
    fontSize: 18,
    marginLeft: 40
  },
  pos: {
    marginBottom: 12
  },
  header: {
    height: 90,
    backgroundColor: "silver",
    position: "relative"
  },
  content: {
    minHeight: 90,
    maxHeight: 400,
    overflow: "auto",
    margin: 0,
    // padding: 20,
  },
  button: {
    position: "absolute",
    left: 10,
    top: 95,
    cursor: "pointer",
    fill: "#fff",
    "z-index": 100
  },
  delete: {
    position: "absolute",
    left: 295,
    top: 8,
    cursor: "pointer"
  },
  vert: {
    position: "absolute",
    left: 340,
    top: 8,
    cursor: "pointer"
  },
  icon: {
    verticalAlign: "middle",
    color: "gray",
    
  },
  desc: {
    verticalAlign: "middle",
    marginLeft: 20,
    fontSize: "14px !important"
  }
};

class EventPopover extends React.Component {
  state = {
    anchorEl: null,
    openModifyForm: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
      
  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const { event, onCloseEventPopover, handleOpenEventForm } = this.props;
    console.log(event);
    const parsedTitle = event.title.split(" ");
    let adjustWidth = "55px";

    if (event.room === '236 A' ||event.room === '236 B' || event.room === '236 C')
    {
      adjustWidth = "44px";
    }

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            style={{ backgroundColor: event.color }}
            action={
              <IconButton onClick={onCloseEventPopover}>
                <CloseIcon />
              </IconButton>
            }
            title={
              <Typography className={classes.title}>
                {parsedTitle[0] + " " + parsedTitle[1]}  CRN : {event.crn}
              </Typography>
            }
          />
          <CardContent className={classes.content}>
            <div >
              <div style={{display:'flex'}}>
                <div>
                  <HomeIcon className={classes.icon} />
                  <span className={classes.desc}>Room : {event.room}</span>
                </div>
                <div>
                  <DateRangeIcon className={classes.icon} style={{marginLeft: adjustWidth}}/>
                  <span className={classes.desc} >
                    Date: {moment(event.start).format("ll")}
                  </span>
                </div>
              </div>
              <div>
                <AccessTimeIcon className={classes.icon} />
                <span className={classes.desc}>
                  Start: {moment(event.start).format("LT")}
                </span>

                <AccessTimeIcon className={classes.icon}
                style={{marginLeft: 40}}
                />
                <span className={classes.desc}>
                  End: {moment(event.end).format("LT")}
                </span>
              </div>
              <EventNoteIcon className={classes.icon} />
              <span className = {classes.desc}> Desc: {event.desc} </span>
            </div>
          </CardContent>

          <Button
            variant="fab"
            mini
            style={{ backgroundColor: event.color }}
            aria-label="add"
            className={classes.button}
            onClick={e => {
              onCloseEventPopover(e, handleOpenEventForm);
            }}
          >
            <CreateIcon />
          </Button>
          <IconButton className={classes.delete} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton
            className={classes.vert}
            aria-label="MoreVert"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem
              onClick={e => {
                onCloseEventPopover(e, handleOpenEventForm);
              }}
            >
              Duplicate
            </MenuItem>
          </Menu>
        </Card>
      </div>
    );
  }
}

EventPopover.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPopover);
