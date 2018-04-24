import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { Route } from "react-router-dom";
import Home from './Home';
import DeadlinePage from './Pages/DeadlinePage';
import styles from './AppBodyStyle';
import AssignLeadInstructor from './Containers/AssignLeadInstructor';
import CreateUser from './Pages/CreateUser';
import CreateRoom from './Pages/CreateRoom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';




const mytheme = createMuiTheme({
    palette: {
      primary: { main: "#720d0d" },
      secondary: { main: "#a74034" },
    },
  });
class AppBody extends Component {

    state = {};
    
    render() {
        const { classes } = this.props;
        const { sideNavOpen , ...rest} = this.props;
        return (
            <MuiThemeProvider theme={mytheme}>  
            
            <div className={classNames(classes.content, classes[`content-right`], {
                [classes.contentShift]: this.props.sideNavOpen,
                [classes[`contentShift-right`]]: this.props.sideNavOpen,
              })}>
               <Route exact path='/' render={(props)=><Home {...props} {...rest}/>} />
               <Route path='/search' render={(props)=><div>Search Page</div>}/>
               <Route path='/action/users' render={(props)=><CreateUser {...props} />}/>
               <Route path='/action/rooms' render={(props)=><CreateRoom {...props}/>}/>
               <Route path='/action/deadline' render={(props)=><DeadlinePage {...props}/>}/>
               <Route path='/action/lead-instructor' render={(props)=><AssignLeadInstructor {...props} />}/>
               <Route path='/action/requests' render={(props)=><div>Requests Page</div>}/>
               <Route path='/view/logs' render={(props)=><div>Activity Logs</div>}/>
               <Route path='/action/archive' render={(props)=><div>Archive Page</div>}/>
            </div>
            
            </MuiThemeProvider>
        )
    }
} 

export default withStyles(styles, { withTheme: true })(AppBody);