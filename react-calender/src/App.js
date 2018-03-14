import React, { Component } from "react";
import Home from "../src/components/containers/Home/Home";
import moment from "moment";
import LoginForm from "../src/components/containers/Forms/LoginForm/LoginForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      currentDate: new Date(2015, 3, 1),
      currentView: "month"
    };
  }

  // handleLogin() {
  //   this.setState({ loggedIn: true });
  // }

  handleDateNavigate(date) {
    this.setState({ currentDate: moment(date).toDate() });
  }

  handleNextDate(){
    if (this.state.currentView === "month"){
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let nextDate = new Date(currentYear, currentMonth + 1);
      this.setState({currentDate: nextDate}); 
    }
  }

  handlePreviousDate(){
    if (this.state.currentView === "month"){
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let nextDate = new Date(currentYear, currentMonth -1);
      this.setState({currentDate: nextDate}); 
    }
  }

  render() {
    const props = {
      onNavigate: (date)=>this.handleDateNavigate(date),
      currentDate: this.state.currentDate,
      view: this.state.currentView
    };

    return (
      <div>
        <div className="App">
          <LoginForm {...props}/>
        </div>
      </div>
    );
  }
}

export default App;
