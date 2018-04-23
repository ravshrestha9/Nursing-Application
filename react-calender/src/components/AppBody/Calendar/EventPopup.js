import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardHeader } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import CreateIcon from "material-ui-icons/Create";
import DeleteIcon from "material-ui-icons/Delete";
import MoreVertIcon from "material-ui-icons/MoreVert";
import CloseIcon from "material-ui-icons/Close";
import IconButton from "material-ui/IconButton";
import HomeIcon from "material-ui-icons/Home";

const styles = {
  card: {
    width: 400,
    overflow: 'auto',
    position: "absolute",
    top: "50%",
    left: "50%",
    "z-index": "2000",
    border: '1 px solid'
  },
  title: {
    fontSize: 18,
    marginLeft: 18
  },
  pos: {
    marginBottom: 12
  },
  header: {
    height: 120,
    backgroundColor: "silver"
  },
  content: {
    minHeight: 100,
    maxHeight: 400,
    overflow: 'auto'
  },
  button: {
    position: "absolute",
    left: 10,
    top: 120,
    cursor: "pointer",
    fill: "#fff",
    "z-index": 100
  },
  delete: {
    position: "absolute",
    left: 275,
    top: 8,
    cursor: "pointer"
  },
  vert: {
    position: "absolute",
    left: 310,
    top: 8,
    cursor: "pointer"
  }

};

class EventPopup extends React.Component{

  componentDidMount() {
    document.body.addEventListener('click', this.props.onCloseEventPopup);
    window.onscroll = function () { window.scrollTo(0, 0); };
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.props.onCloseEventPopup);
  }

   render() {
      const { classes } = this.props;

      if (!this.props.open) return null;
      {
        /*classes.card.left = props.position.left;
      classes.card.top = props.position.top;*/
      }
      console.log(this.props.event);
      return (
        
        <div>
          <Card
            className={classes.card}
            style={{ left: this.props.position.left, top: this.props.position.top }}
          >
            <CardHeader
              className={classes.header}
              action={
                <IconButton onClick={this.props.onCloseEventPopup}>
                  <CloseIcon />
                </IconButton>
              }
              title = {
                <Typography className={classes.title}>
                  {this.props.event.id}  {this.props.event.title} 
                </Typography>
              }
            />
            <CardContent className = {classes.content}>
              <div className={classes.title}>
                <div ><HomeIcon style={{verticalAlign: 'top'}}/> <span style={{verticalAlign: 'middle', marginLeft:10}}>Room : {this.props.event.location}</span></div> 
                <p>Start: {moment(this.props.event.start).format("ha")}</p>
                <p>Desc: {this.props.event.desc}</p>
              </div>
            </CardContent>
            
              <Button
                variant="fab"
                mini
                color="secondary"
                aria-label="add"
                className={classes.button}
              >
                <CreateIcon />
              </Button>
              <IconButton className={classes.delete} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton className={classes.vert} aria-label="MoreVert">
            <MoreVertIcon />
          </IconButton>
          </Card>
        </div>
      );
    };
}

EventPopup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPopup);

