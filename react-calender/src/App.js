import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import Calendar from './Calendar/Calendar';
import Modal from './Calendar/Modal';
import Form from './Calendar/Form';
import Home from './Home/Home';
//import Fetch 

class App extends Component {
  constructor(){
    super();
    this.state = {
      schedules: {}
    };
  }
  
  componentWillMount(){
    
  }
  
  componentDidMount(){

  }

  render() {
    return (
      <div>
      <div className="App">
        {
          <Home/>
         // <Modal/>
          //<Form/> 
        }        
      </div>
      </div>
    );
  }
}

export default App;
