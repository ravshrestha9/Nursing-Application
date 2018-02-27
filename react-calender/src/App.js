import React, {Component} from 'react'
import Home from './Home/Home';

class App extends Component {
  constructor(){
    super();
    this.state = {
      schedules: {},
      loggedIn: false
    };
  }
  
  componentWillMount(){
    
  }
  
  componentDidMount(){

  }

  handleLogin(){
    this.setState({loggedIn: true});
  }

  render() {
    // if (this.state.loggedIn){
      return (
        <div>
        <div className="App">
            <Home/>
        </div>
        </div>
      );
    // } else {
    //   return (
    //     <div> 
    //       You must log in.
    //       <button type="button" onClick={this.handleLogin.bind(this)}>Log In</button>
    //     </div>
    //   );
    // }
  }
}

export default App;
