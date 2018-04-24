
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import Radio, { RadioGroup } from 'material-ui/Radio';
import TextField from "material-ui/TextField";
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = {
  root: {
    paddingTop: "25px",
    display: "flex",
    justifyContent: "center"
  },
  flex: {
    flex: 1
  },
  formBody: {
    marginLeft: 20
  },
  textField: {
    width: "500px"
  },
  header:{
    paddingTop: 40,
    textAlign: "center"

  }
};

class CreateRoom extends React.Component {
  state = {
    open: false,
    roomnumber: '',
    capacity: '',
    equipments: 'yes',
    beds: 'yes',
    computers: 'yes',
    audiovisual: 'yes',
    desc: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({
      open: false,
      roomnumber: '',
      capacity: '',
      seats: '',
      desks: '',
      mannequins: '',
      computers: '',
      beds: '',
      audiovisual: '',
      whiteboards: '',
      Noelsimulators: '',
      ICUsimulators: '',
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Typography
        className={classes.header}
        >
          <h1> Create Room</h1>
        </Typography>
        <div className={classes.root}>
          <br />

          <div id="form-body" className={classes.root}>

            <TextField
              label="Room Number"
              name="roomnumber"
              value={this.state.roomnumber}
              onChange={this.handleChange.bind(this)}
              className={classes.textField}
              style={{ width: "300px", paddingRight: "20px" }}
            />
            <br /><br />
            <TextField
              label="Capacity"
              name="capacity"
              value={this.state.capacity}
              onChange={this.handleChange.bind(this)}
              style={{ width: "300px", paddingRight: "20px" }}
              className={classes.input}
            />
          </div>
        </div>
        <div >
          <div className={classes.root}>
            <FormControl component="fieldset" style={{ paddingRight: "80px" }} >
              <FormLabel component="legend">Equipments</FormLabel>
              <RadioGroup
                aria-label="Equipments"
                name="equipments"
                value={this.state.equipments}
                onChange={this.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>


            <FormControl component="fieldset" style={{ paddingRight: "80px" }}>
              <FormLabel component="legend">Beds</FormLabel>
              <RadioGroup
                aria-label="Beds"
                name="beds"
                value={this.state.beds}
                onChange={this.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" style={{ paddingRight: "80px" }}>
              <FormLabel component="legend">Computers</FormLabel>
              <RadioGroup
                aria-label="Computers"
                name="Computers"
                value={this.state.computers}
                onChange={this.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>


            <FormControl component="fieldset" style={{ paddingRight: "80px" }}>
              <FormLabel component="legend">AudioVisual</FormLabel>
              <RadioGroup
                aria-label="Audio Visual"
                name="audiovisual"
                value={this.state.audiovisual}
                onChange={this.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <br /><br /><br />
          </div>
        </div>
        <div className={classes.root}>
          <TextField
            multiline
            rows="4"
            label="Description"
            name="desc"
            value={this.props.desc}
            style={{ width: '40%' }}
            onChange={this.handleChange}
          /> <br /> <br />

        </div>
        <br /> <br />
        <Button color="inherit"
          style={{ marginLeft: "50%" }}>
          Save</Button>
      </div>
    );
  }
};

CreateRoom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateRoom);