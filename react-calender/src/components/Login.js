import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import SimpleAppBar from './components/LoginBar/loginbar';
import Paper from "material-ui/Paper";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PersonIcon from "material-ui-icons/Person";
import LockIcon from "material-ui-icons/Lock";
import {InputAdornment} from 'material-ui/Input';
import './Loginform.css';
import { Redirect } from 'react-router';
import { authenticate } from "../services/services";

const styles = {
  paper: {
    // paddingtop: 16,
    textAlign: 'center',
    // display: "center",
    // innerWidth: '200px',
    // width: "500px",
    // height: "400px"
  }
};
const mytheme = createMuiTheme({
  palette: {
    primary: { main: "#720d0d" },
    secondary: { main: "#a74034" },
  },
});

class Login extends Component {
  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = e => {
    authenticate(this.state.username, this.state.password)
      .then(response => {
        if (response.status === 200) {
          this.props.setLoggedIn(response.data.token);
        }
      })
      .catch(err => {
        alert("Enter a valid username and password!");
      });
  };

  render() {
    //this.props.location.state || 
    const { from } = { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer || this.props.authed) {
      return (
        <Redirect to={from} />
      )
    }

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

    return (
      <div>
        <MuiThemeProvider theme={mytheme}>
          <div>
            {loginBar}
            {LoginForm}
          </div>
        </MuiThemeProvider>
      </div>);
  }
}

export default Login;