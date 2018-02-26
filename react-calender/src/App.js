import React, {Component} from 'react'
import Home from './Home/Home';

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
          <Home/>

      </div>
      </div>
    );
  }
}

export default App;
