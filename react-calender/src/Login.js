import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import Paper from "material-ui/Paper";
// import logo from "./ulm_logo1.png";
import axios from "axios";

import App from "./App";

const credentials = { username: "super", password: "super" };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "",
      cwid: "",
      loggedIn: false
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
        if (response.status == 200) {
          console.log(response);
          const {UserName, Password, Role, CWID} = {...response.data[0]};
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
        console.log(err);
      });
  };

  render() {
    let loginForm = (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ECEEF0"
        }}
      >
        <Paper
          style={{
            innerWidth: "100px",

            paddingBottom: 16,
            width: "500px",
            height: "400px"
          }}
        >
          <div
            className="header"
            style={{
              height: "80px",
              width: "100%",
              backgroundColor: "#223382",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* <div className="logo" style={{flex: '1', border: '1px solid black'}} >
                <img src={logo} style={{height:'80px', width:'250px', clip: 'rect(20px,20px,20px,20px)'}} />
              </div> */}
            <div style={{}}>
              <span
                style={{
                  color: "#F4D2DC",
                  fontSize: "20px",
                  fontWeight: "100"
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#BD707F",
                    fontSize: "30px"
                  }}
                >
                  ULM
                </span>{" "}
                Nursing Calendar{" "}
              </span>{" "}
            </div>
          </div>
          <div
            className="content"
            style={{
              textAlign: "center"
            }}
          >
            <br />
            <br />
            <TextField
              label="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br /> <br />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br /> <br /> <br /> <br />
            <Button
              variant="raised"
              size="large"
              color="primary"
              onClick={this.handleLogin}
            >
              Submit
            </Button>
            <br /> <br />
          </div>
        </Paper>
      </div>
    );

    if (this.state.loggedIn) loginForm = null;

    const props = {
      loggedIn: this.state.loggedIn,
      cwid: this.state.cwid,
      role: this.state.role
    };
    return (
      <div>
        {loginForm}
        <App {...props} />
      </div>
    );
  }
}

export default Login;
