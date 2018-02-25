import React, { Component } from "react";
import moment from "moment";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Calendar from "../Calendar/Calendar";
import AddIcon from "material-ui-icons/Add";
import KeyboardArrowLeftIcon from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "material-ui-icons/KeyboardArrowRight";
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { FormControl, FormHelperText } from 'material-ui/Form';

import Drawers from "./Drawers";
import {MenuItem} from "material-ui/Menu";
import "./MenuBar.css";


// class MenuBar extends Component {
//   constructor(props){
//     super(props);
//     this.state = {age:''};

//   }
// }

const MenuBar = toolbar => {

  const goToBack = () => {
    if (toolbar.view == "day") {
      toolbar.date.setDate(toolbar.date.getDate() - 1);
      toolbar.onNavigate("next");
    } else if (toolbar.view == "week") {
      toolbar.date.setDate(toolbar.date.getDate() - 7);
      toolbar.onNavigate("next");
    } else if (toolbar.view == "month") {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate("prev");
    }
  };

  const goToNext = () => {
    if (toolbar.view == "day") {
      toolbar.date.setDate(toolbar.date.getDate() + 1);
      toolbar.onNavigate("next");
    } else if (toolbar.view == "week") {
      toolbar.date.setDate(toolbar.date.getDate() + 7);
      toolbar.onNavigate("next");
    } else if (toolbar.view == "month") {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate("next");
    }
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate("current");
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span>
        <b>{date.format("MMMM")}</b>
        <span> {date.format("YYYY")}</span>
      </span>
    );
  };

  const handleChangeView = (event)=>{
    let view = event.target.value;  
    toolbar.onViewChange(view.toLowerCase());
  }

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
        <IconButton
                color="inherit"
                aria-label="open drawer"
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
                onClick={goToBack}
              >
                <KeyboardArrowLeftIcon style={{height:"30px", width:"30px"}}/>
              </Button>
              <Button
                color="inherit"
                className="navigateButton"
                onClick={goToCurrent}
              >
                today
              </Button>
              <Button
                color="inherit"
                variant="fab"
                mini
                id="next"
                onClick={goToNext}
              >
                <KeyboardArrowRightIcon style={{height:"30px", width:"30px"}}/>
              </Button>
            </div>
          </div>
          <Typography variant="title" color="inherit" className="flex">
            <label className="dateLabel">{label()}</label>
          </Typography>
      
          <Select
            value={'Month'}            
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
            defaultValue = {"Month"}
            style= {{width:"170px", color:"white", textAlign:"center"}}
            onChange = {handleChangeView}
          >
            <MenuItem value="Month">Month</MenuItem>
            <MenuItem value="Week">Week</MenuItem>
            <MenuItem value="Day">Day</MenuItem>
            <MenuItem value="Agenda">Agenda</MenuItem>
          </Select>
           
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
