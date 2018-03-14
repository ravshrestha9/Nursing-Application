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

import styles from './MenuBarStyle';
import './MenuBar.css';

class MenuBar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getDateLabel = (date) => {
        let year = date.getFullYear();
        let locale = "en-us";
        let month = date.toLocaleString(locale, { month: "long" });
        return '' + month  + ' ' + year;
    }

    render() {
        const { classes } = this.props;
        
        return (
            <AppBar
                className={classNames(classes.appBar, {
                })}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.props.onSideNavDisplay}
                    // className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className="flex">
                        Nursing Course Calendar
                    </Typography>

                    <div className="">
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
                        </div>
                    </div>
                    <Typography variant="title" color="inherit" className="flex">
                        <label className="dateLabel">{this.getDateLabel(this.props.currentDate)}</label>
                    </Typography>
                
                    <Select
                        value={this.props.currentView}            
                        style= {{width:"170px", color:"white", textAlign:"center"}}
                        onChange = {this.props.onViewChange}
                    >
                        <MenuItem value="month">Month</MenuItem>
                        <MenuItem value="week">Week</MenuItem>
                        <MenuItem value="day">Day</MenuItem>
                        <MenuItem value="agenda">Agenda</MenuItem>
                    </Select>
                          
                    <Button color="inherit">{this.props.loggedIn?'LogOut':'LogIn'}</Button>
                </Toolbar>
            </AppBar>
        )
    }

} 

export default withStyles(styles, { withTheme: true })(MenuBar);
