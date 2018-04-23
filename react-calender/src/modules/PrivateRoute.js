import {Redirect, Route} from 'react-router-dom';
import React from 'react';

/* PrivateRoute component definition */
const PrivateRoute = ({component: Component, authed, ...rest}) => {
    console.log('there');
    console.log(authed);
    return (
      <Route
        {...rest}
        render={(props) => authed 
          ? <Component {...props} /> 
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
       />
    )
  }

  export default PrivateRoute;
