import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import Calender from './Calender/Calender'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <Calender/> 
        }
      </div>
    );
  }
}

export default App;
