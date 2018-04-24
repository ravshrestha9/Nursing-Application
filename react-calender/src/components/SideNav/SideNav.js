import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import IconButton from "material-ui/IconButton";

// import Divider from 'material-ui/Divider';
import Drawer from "material-ui/Drawer";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import styles from "./SideNavStyle";
import Button from "material-ui";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Divider from "material-ui/Divider";
import { MenuItem } from "material-ui/Menu";

//icons imports
import HomeIcon from "material-ui-icons/Home";
import PeopleIcon from "material-ui-icons/People";
import RoomIcon from "material-ui-icons/Room";
import PersonIcon from "material-ui-icons/Person";
import TodayIcon from "material-ui-icons/Today";
import SendIcon from "material-ui-icons/Send";
import SubjectIcon from "material-ui-icons/Subject";
import FileDownloadIcon from "material-ui-icons/FileDownload";
import PrintIcon from "material-ui-icons/Print";
import ArchiveIcon from "material-ui-icons/Archive";

import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

class SideNav extends Component {
  state = {};

  getAuthNavs() {
    const { role } = this.context.store.user;
    let navList = [
      {
        label: "Home",
        icon: <HomeIcon />,
        link: "/"
      },
      {
        label: "Users",
        icon: <PeopleIcon />,
        link: "/action/users"
      },
      {
        label: "Rooms",
        icon: <RoomIcon />,
        link: "/action/rooms"
      },
      {
        label: "Lead Instructor",
        icon: <PersonIcon />,
        link: "/action/lead-instructor"
      },
      {
        label: "Deadline",
        icon: <TodayIcon />,
        link: "/action/deadline"
      },
      {
        label: "Requests",
        icon: <SendIcon />,
        link: "/action/requests"
      },
      {
        label: "Activity Logs",
        icon: <SubjectIcon />,
        link: "/view/logs"
      },
      {
        label: "Archive",
        icon: <ArchiveIcon />,
        link: "/action/archive"
      }
    ];

    if (role !== "admin") {
      let authNavs = navList.filter(
        nav =>
          nav.label === "Home" 
      );
      return authNavs;
    }
    return navList;
  }

  exportDocument = () => {
    const input = document.querySelector(".rbc-calendar");
    html2canvas(input).then(canvas => {
      var pdf = new jsPDF("l", "mm", "a4");
      var imgData = canvas.toDataURL("image/jpeg", 1.0);

      // due to lack of documentation; try setting w/h based on unit
      pdf.addImage(imgData, "JPEG", 10, 10, 280, 190); // 180x150 mm @ (10,10)mm

      pdf.save("Calendar.pdf");
    });
  };

  printDocument = () =>
  {
    var content = document.querySelector(".rbc-calendar");
var pri = document.getElementById("calendar-container").contentWindow;
pri.document.open();
pri.document.write(content.innerHTML);
pri.document.close();
pri.focus();
pri.print();
  }

  render() {
    const { classes, theme, open, onSideNavClose } = this.props;

    const authNavs = this.getAuthNavs();
    const sideList = (
      <div className={classes.root}>
        <List>
          {authNavs.map((nav, index) => (
            <Link key={index} to={nav.link} className={classes.link}>
              <ListItem button style={{ padding: 18 }}>
                <ListItemIcon>{nav.icon}</ListItemIcon>
                <ListItemText inset primary={nav.label} />
              </ListItem>
              {/* <Divider /> */}
              {/* <MenuItem>{nav.label}</MenuItem> */}
            </Link>
          ))}
          <ListItem
            button
            style={{ padding: 18 }}
            onClick = {() => {window.print()}}
          >
            <ListItemIcon>
              <PrintIcon />
            </ListItemIcon>
            <ListItemText inset primary="Print"
             />
          </ListItem>

          <ListItem button style={{ padding: 18 }}
          onClick={this.exportDocument}
          >
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText
              inset
              primary="Export"
            />
          </ListItem>
        </List>
      </div>
    );

    return (
      <Drawer
        variant="persistent"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={onSideNavClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <div tabIndex={0} role="button">
          {sideList}
        </div>
      </Drawer>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

SideNav.contextTypes = {
  store: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(SideNav);
