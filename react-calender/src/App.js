import React, { Component } from "react";
 import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MenuBar from './components/MenuBar/MenuBar';
import SideNav from './components/SideNav/SideNav';
import AppBody from './components/AppBody/AppBody';
import moment from 'moment';
import PrintThisComponent from '../src/components/Functionality/print';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      currentDate: new Date(),
      currentView: "month",
      sideNavOpen: false,
    };
  }

  // handleLogin() {
  //   this.setState({ loggedIn: true });
  // }
  handleSideNavDisplay = () => {
    let isOpen = this.state.sideNavOpen;
    this.setState({ sideNavOpen: !isOpen });
  };

  handleDateNavigate = (date) => {
    this.setState({ currentDate: moment(date).toDate() });
  }

  handleNextDate = () => {
    if (this.state.currentView === "month"){
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let nextDate = new Date(currentYear, currentMonth + 1);
      this.setState({currentDate: nextDate}); 
    }
  }

  handlePreviousDate = () => {
    if (this.state.currentView === "month"){
      let currentMonth = this.state.currentDate.getMonth();
      let currentYear = this.state.currentDate.getFullYear();
      let nextDate = new Date(currentYear, currentMonth -1);
      this.setState({currentDate: nextDate}); 
    }
  }
  
  handleCurrentDate = ()=>{
    this.setState({ currentDate: new Date()});
  }

  handleViewChange = (event) => {
    this.setState({ currentView: event.target.value});
  }

  render() {
    const bodyProps = {
      onNavigate: (date)=>this.handleDateNavigate(date),
      currentDate: this.state.currentDate,
      currentView: this.state.currentView,
      sideNavOpen: this.state.sideNavOpen,
      loginInfo: this.props
    };
    
    const menuProps = {
      onSideNavDisplay:this.handleSideNavDisplay,
      onNextDate: this.handleNextDate,
      onPreviousDate: this.handlePreviousDate,
      onNavigateToday: this.handleCurrentDate,
      currentDate: this.state.currentDate,
      currentView: this.state.currentView,
      onViewChange: this.handleViewChange,
      loggedIn:this.props.loggedIn
    };

    const navProps = {
      open: this.state.sideNavOpen,
      loginInfo: this.props
    };

    if (!this.props.loggedIn){
      return null;
    }

    return (
      <MuiThemeProvider>
      <div>
          <MenuBar {...menuProps}/>
          <SideNav {...navProps} />
          <AppBody 
            {...bodyProps}
          />
          
        <PrintThisComponent/>
        {/* <div>
          <button onClick={this.handlePreviousDate.bind(this)}>Previous</button>
          <button onClick={this.handleNextDate.bind(this)}>Next</button>
        </div> */}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
