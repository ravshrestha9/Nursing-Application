import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
// import SimpleAppBar from './components/LoginBar/loginbar';
import Paper from "material-ui/Paper";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './LoginForm.css';

import {Redirect} from 'react-router';
import { authenticate } from "../services/services";

const styles = {
  paper: {
    paddingtop: 16,
    textAlign: 'center',
    display: "center",
    innerWidth: '200px',
    width: "500px",
    height: "400px"
  }
};

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
        console.log(err);
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

      <div className="form-group">

        <Paper style={styles.paper}>
          <div className="header">
            <span className="span">
              <span className="innerSpan" >ULM</span>
              Nursing Calendar
            </span>
          </div>

          <div className="form-contents" style={{ paddingtop: 100 }}>
            <TextField
              label="Username/CWID"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br /><br />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div> <br /><br />
          <Button variant="raised" color="primary" onClick={this.handleLogin}>
            Login
          </Button>
        </Paper>
      </div>
    )

    return (
      <div>
          <div>
            {loginBar}
            {LoginForm}
          </div>
      </div>
    );
  }
}

export default Login;