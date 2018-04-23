import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Paper from "material-ui/Paper";
import axios from "axios";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PersonIcon from "material-ui-icons/Person";
import LockIcon from "material-ui-icons/Lock";
import {InputAdornment} from 'material-ui/Input';
import './loginform.css';
import App from "./App";


const mytheme = createMuiTheme({
  palette: {
    primary: { main: "#720d0d" },
    secondary: { main: "#a74034" },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "admin",
      cwid: "",
      loggedIn: false,
    };
  }

  handleChange = event => {
  
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  handleLogin = e => {
    axios
      .post("http://35.185.78.228/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          const { UserName, Password, Role, CWID } = { ...response.data[0] };
          this.setState({
            username: UserName,
            password: Password,
            role: Role,
            cwid: CWID,
            loggedIn: true
          });
        }
      })
      .catch(err => {
        alert("Enter the required fields");
      });
  };

  render() {
    let loginBar = (
      <div >
        <AppBar className="app-bar" position="static">
          <Toolbar className="toolbar">
            <img className="img" src="https://preview.ibb.co/ihqRLH/ulmLogo.png" alt="logo"></img>
            <Typography variant="title" color="inherit" style={{ fontSize: "calc(16px+10vw)" }}>
              The University of Louisiana at Monroe
                    </Typography>
          </Toolbar>
        </AppBar>
      </div>

    )

    let LoginForm = (
      <div className="background">
        <Paper
          className="Paper"
          style={{

            textAlign: 'center',
          }}
        >
          <div className="header">
            <span className="span">
              <span className="innerSpan" >ULM</span>
              Nursing Calendar
            </span>
          </div>
          <div className="container">

            <div className="Left">

            </div>
            <div className="form-contents" style={{ paddingtop: 100 }}>


              <TextField
                label="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                }}
              />

              <br /><br />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                }}
              /><br /><br /><br /><br />
              <Button variant="raised" color="primary" onClick={this.handleLogin}>
                Login
          </Button>
            </div>
          </div>
        </Paper>
      </div>
    )

    if (this.state.loggedIn) { LoginForm = null };
    if (this.state.loggedIn) { loginBar = null };

    const props = {
      loggedIn: this.state.loggedIn,
      cwid: this.state.cwid,
      role: this.state.role
    };
    return (
      <div>
        <MuiThemeProvider theme={mytheme}>
          <div>
            {loginBar}
            {LoginForm}
            <App {...props} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;