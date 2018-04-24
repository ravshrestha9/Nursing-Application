import React, { Component } from "react";

import MenuBar from "./components/MenuBar/MenuBar";
import SideNav from "./components/SideNav/SideNav";
import AppBody from "./components/AppBody/AppBody";
import moment from "moment";
import './App.css';

import ReactDOM from "react-dom";
import PrintTemplate from "react-print";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      handleLogOut: this.props.handleLogOut,
      currentDate: new Date(),
      currentView: "month",
      sideNavOpen: false
    };
  }

  handleSideNavDisplay = () => {
    let isOpen = this.state.sideNavOpen;
    this.setState({ sideNavOpen: !isOpen });
  };

  handleDateNavigate = date => {
    this.setState({ currentDate: moment(date).toDate() });
  };

  handleNextDate = () => {
    if (this.state.currentView === "month" || this.state.currentView === "agenda") {
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let nextDate = new Date(currentYear, currentMonth + 1);
      this.setState({ currentDate: nextDate });
    } else if (this.state.currentView === "week") {
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let currentDay = this.state.currentDate.getDate();
      let nextDate = new Date(currentYear, currentMonth, currentDay + 7);
      this.setState({ currentDate: nextDate });
    } else if (this.state.currentView === "day") {
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let currentDay = this.state.currentDate.getDate();
      let nextDate = new Date(currentYear, currentMonth, currentDay + 1);
      this.setState({ currentDate: nextDate });
    }
  };

  handlePreviousDate = () => {
    if (this.state.currentView === "month" || this.state.currentView === "agenda") {
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let nextDate = new Date(currentYear, currentMonth - 1);
      this.setState({ currentDate: nextDate });
    } else if (this.state.currentView === "week") {
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let currentDay = this.state.currentDate.getDate();
      let nextDate = new Date(currentYear, currentMonth, currentDay - 7);
      this.setState({ currentDate: nextDate });
    } else if (this.state.currentView === "day") {
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let currentDay = this.state.currentDate.getDate();
      let nextDate = new Date(currentYear, currentMonth, currentDay - 1);
      this.setState({ currentDate: nextDate });
    }
  };

  handleCurrentDate = () => {
    this.setState({ currentDate: new Date() });
  };

  handleViewChange = event => {
    this.setState({ currentView: event.target.value });
  };

  handleSideNavClose = () => {
    this.setState({sideNavOpen: false});
  }

  render() {
    const bodyProps = {
      ...this.props,
      onNavigate: date => this.handleDateNavigate(date),
      currentDate: this.state.currentDate,
      currentView: this.state.currentView,
      sideNavOpen: this.state.sideNavOpen,
    };

    const menuProps = {
      ...this.props,
      onNavigate: date => this.handleDateNavigate(date),
      onSideNavDisplay: this.handleSideNavDisplay,
      onNextDate: this.handleNextDate,
      onPreviousDate: this.handlePreviousDate,
      onNavigateToday: this.handleCurrentDate,
      currentDate: this.state.currentDate,
      currentView: this.state.currentView,
      onViewChange: this.handleViewChange,
    };

    const navProps = {
      ...this.props,
      open: this.state.sideNavOpen,
      onSideNavClose: this.handleSideNavClose
    };

    console.log('app component');
    return (
      <div>
        <div id="react-no-print">
            <MenuBar {...menuProps}/>
            <SideNav {...navProps}/>
            {/*AppBodyRouters*/}
            </div>
            <div>
            <AppBody {...bodyProps}/>
        </div>
        </div>
    );
  }
}

export default App;
