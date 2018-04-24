import React from "react";
import Input, { InputLabel } from "material-ui/Input";
import { withStyles } from "material-ui/styles";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { FormControl, FormHelperText } from "material-ui/Form";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";
import "./CreateUser.css";

const styles = theme => ({
  root: {
    paddingTop: "40px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center,"
  },
  input: {
    margin: theme.spacing.unit
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  select: {
    minWidth: 120
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
});

class CreateUserForm extends React.Component {
  state = {
    CWID: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose() {
    this.setState({
      CWID: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
    });
    this.props.CloseCreateRoom();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.container} autoComplete="off">



          <FormControl className={classes.formControl}>
            <Typography  >
              <h1> Create User</h1>
            </Typography>

            <InputLabel htmlFor="CWID" className="MuiInputLabel-animated-205" >CWID</InputLabel>
            <Select
              value={this.state.CWID}
              onChange={this.handleChange}
              inputProps={{
                name: "CWID",
                id: "CWID"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10000001}>10000001</MenuItem>
              <MenuItem value={10000002}>10000002</MenuItem>
              <MenuItem value={10000003}>10000003</MenuItem>
            </Select>
            <br />
            <br />
            <Input
              placeholder="Username"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              style={{
                width: "460px"
              }}
            />
            <br />
            <br />
            <Input
              placeholder="First Name"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
            />{" "}
            <br />
            <br />
            <Input
              placeholder="Last Name"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
            />{" "}
            <br />
            <br />
            <Input
              placeholder="Email"
              type="email"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
            />{" "}
            <br />
            <br />
            <Button color="#ff9e80">Save</Button>
          </FormControl>
          <br />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateUserForm);
