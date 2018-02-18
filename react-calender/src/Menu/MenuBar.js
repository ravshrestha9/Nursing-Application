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

import "./MenuBar.css";

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

  const weekView = () => {
    toolbar.onViewChange("week");
  };

  const monthView = () => {
    toolbar.onViewChange("month");
  };

  const dayView = () => {
    toolbar.onViewChange("day");
  };

  const agendaView = () => {
    toolbar.onViewChange("agenda");
  };

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
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
          <Button color="inherit" onClick={monthView}>
            Month
          </Button>
          <Button color="inherit" onClick={weekView}>
            Week
          </Button>
          <Button color="inherit" onClick={dayView}>
            Day
          </Button>
          <Button color="inherit" onClick={agendaView}>
            Agenda
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
