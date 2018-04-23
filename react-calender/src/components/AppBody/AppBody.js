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

class AppBody extends Component {

    state = {};
    
    render() {
        const { classes } = this.props;
        const { sideNavOpen , ...rest} = this.props;
        return (
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
               <Route path='/action/export' render={(props)=><div>Export</div>}/>
               <Route path='/action/print' render={(props)=><div>Print Page</div>}/>
               <Route path='/action/archive' render={(props)=><div>Archive Page</div>}/>
            </div>
        )
    }
} 

export default withStyles(styles, { withTheme: true })(AppBody);