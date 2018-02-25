import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RequestForm from './form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {showForm: false}
  }

  handleClick = (event)=>{
      this.setState({showForm : true});
      console.log(this.state.showForm);
  }

  hideForm(){
    this.setState({showForm: false});
  }

  render() {
    console.log("State in App: " + this.state.showForm);
    return (
      <MuiThemeProvider>
      <div className="App">
        <h1>Request Form</h1>
        <RequestForm 
          showForm = {this.state.showForm}
          hideForm = {this.hideForm.bind(this)}          
        />
        <RaisedButton
          label="Request" primary={true} 
          onClick = {this.handleClick.bind(this)}
        >
        </RaisedButton>
      </div>


      </MuiThemeProvider>
    );
  }
}

export default App;
