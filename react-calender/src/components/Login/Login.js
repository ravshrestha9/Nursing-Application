import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import Paper from "material-ui/Paper";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ECEEF0"
        }}
      >
        <MuiThemeProvider>
          <Paper
            style={{
              innerWidth: "100px",
              paddingTop: 16,
              paddingBottom: 16,
              width: "500px",
              height: "300px"
            }}
          >
            <div>
              <h1> Login</h1>
              <i class="material-icons">account_circle</i>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Login;
