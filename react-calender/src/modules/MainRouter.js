// import {Redirect, Router } from 'react-router';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from '../components/Login';
import App from '../App';
import PrivateRoute from './PrivateRoute';
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles";

const mytheme = createMuiTheme({
    palette: {
      primary: { main: "#2471A3" },
      secondary: { main: "#5499C7" },
    },
  });
// const mytheme = createMuiTheme({
//     palette: {
//       primary: { main: "#720d0d" },
//       secondary: { main: "#a74034" },
//     },
//   });

export default class MainRouter extends React.Component{
    render(){   
        return (
            <MuiThemeProvider theme={mytheme}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" render={ (props)=> <Login {...props} {...this.props} /> }/>
                        <PrivateRoute path="/" {...this.props} component={App} />
                        <Redirect to="/login" />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}
