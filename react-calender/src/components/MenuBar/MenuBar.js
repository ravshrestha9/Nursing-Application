import React, {Component} from 'react';
import Button from "material-ui/Button";
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import classNames from 'classnames';
import Toolbar from 'material-ui/Toolbar';
import { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import KeyboardArrowLeftIcon from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "material-ui-icons/KeyboardArrowRight";
import Select from 'material-ui/Select';
import Login from '../Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Calendar from '@atlaskit/calendar';
import Popover from "material-ui/Popover";

import styles from './MenuBarStyle';
import './MenuBar.css';

class MenuBar extends Component {
    state = {
        openCalendar: false,
        anchorEl: null
    }

    getDateLabel = (date) => {
        let year = date.getFullYear();
        let locale = "en-us";
        let month = date.toLocaleString(locale, { month: "long" });
        return '' + month  + ' ' + year;
    }

    handleLogOut = () =>{
        this.context.actions.setLoggedOut();
    }

    handleCalendarPopup = (event) => {
        this.setState({
            openCalendar: true,
            anchorEl: event.target
        });
    }

    handleRequestClose = () => {
        this.setState({
            openCalendar: false
        });
    };

    handleDateSelect = ({iso}) => {
        this.handleRequestClose();
        this.props.onNavigate(iso);
    }

    render() {
        const { classes } = this.props;
        
        return (
            <AppBar
                className={classNames(classes.appBar, {
                })}
            >
                <Toolbar style={{display: 'flex', flex: 1}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.onSideNavDisplay}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to ="/" style={{textDecoration: 'none'}}>
                        <Typography variant="title" style={{color:"#B6CFE0", fontSize:20}}>
                            Nursing Calendar
                        </Typography>
                    </Link>


                    <div className="navigateButtons">
                        <Button
                            color="inherit"
                            variant="fab"
                            mini
                            id="back"
                            onClick={this.props.onPreviousDate}
                        >
                            <KeyboardArrowLeftIcon style={{height:"30px", width:"30px"}}/>
                        </Button>
                        <Button
                            color="inherit"
                            className="navigateButton"
                            onClick={this.props.onNavigateToday}
                        >
                            today
                        </Button>
                        <Button
                            color="inherit"
                            variant="fab"
                            mini
                            id="next"
                            onClick={this.props.onNextDate}
                        >
                            <KeyboardArrowRightIcon style={{height:"30px", width:"30px"}}/>
                        </Button>
                    
                   
                        <Button
                            color="inherit"
                            style={{fontSize: '19px', width: '200px'}}
                            onClick={this.handleCalendarPopup} 
                        >
                            {this.getDateLabel(this.props.currentDate)}
                        </Button>

                        <Popover
                            open={this.state.openCalendar}
                            anchorEl={this.state.anchorEl}
                            anchorPosition= {{ vertical: "top", horizontal: "left" }}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            elevation={5}
                            onClose={this.handleRequestClose}
                        >
                            <Calendar selected={[this.props.currentDate]} onSelect={this.handleDateSelect}/>
                        </Popover>
                    </div>
                    <div style={{flexShrink:1, flexBasis:'20%'}}>
                        <Select
                            value={this.props.currentView}            
                            style= {{width:"55%", color:"white", backgroundColor:'#5499C7', textAlign:"center"}}
                            onChange = {this.props.onViewChange}
                        >
                            <MenuItem value="month">Month</MenuItem>
                            <MenuItem value="week">Week</MenuItem>
                            <MenuItem value="day">Day</MenuItem>
                            <MenuItem value="agenda">Agenda</MenuItem>
                        </Select>
                       &nbsp;&nbsp;
                        <Button style= {{width:"20%"}} color="inherit" onClick = {this.handleLogOut}> Logout </Button>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }

} 

MenuBar.contextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(MenuBar);
