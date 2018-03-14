import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import "./LoginForm.css";
import "./ulmlogo.png";

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = login => {
        this.setState({
          [login.target.name]: login.target.value,
          });
      };

      onLoginSave = ()=> {
        let login = {
            username: this.state.username,
            password: this.state.password,
        }
      }

      render() {
        const { classes } = this.props;
        return (
            <div>
                <img id="logo" src={require("./ulmlogo.png")}/>
                <h1 id="nurse">Nursing Calendar</h1>
                <br />
            <form id="logPage" >
                <TextField
                label="Username"
                name="username"
                value={this.state.title}
                onChange={this.handleChange.bind(this)}
                />
                <br /> <br />
                <TextField
                label="Password"
                name="password"
                type="password"
                value={this.state.title}
                onChange={this.handleChange.bind(this)}
                />
                <br /><br /><br /><br />
                <Button variant="raised" id="buttonCol" type="submit" onClick={this.onLoginSave.bind(this)}>
                    Login
                </Button>
            </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(LoginForm);