import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
 import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux';
// import reducer from './components/store/reducers/reducer';
// import { Provider } from 'react-red
import LetterAvatars from './form';
require("react-big-calendar/lib/css/react-big-calendar.css")

// const store = createStore(reducer);

ReactDOM.render(
    (<LetterAvatars/>), document.getElementById('root'));
// registerServiceWorker();

{/* <Router>
    <Switch>
        <Route path="/" component={Login}/>
        <Route exact path="/login" component={Login} />
    </Switch>
  </Router> */}

//   <LetterAvatars/>