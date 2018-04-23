import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import {Link} from 'react-router-dom';
import IconButton from "material-ui/IconButton";

// import Divider from 'material-ui/Divider';
import Drawer from "material-ui/Drawer";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import styles from "./SideNavStyle";
import Button from "material-ui";
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {MenuItem} from "material-ui/Menu";

//icons imports
import HomeIcon from 'material-ui-icons/Home';
import PeopleIcon from 'material-ui-icons/People';
import RoomIcon from 'material-ui-icons/Room';
import PersonIcon from 'material-ui-icons/Person';
import TodayIcon from 'material-ui-icons/Today';
import SendIcon from 'material-ui-icons/Send';
import SubjectIcon from 'material-ui-icons/Subject';
import FileDownloadIcon from 'material-ui-icons/FileDownload';
import PrintIcon from 'material-ui-icons/Print';
import ArchiveIcon from 'material-ui-icons/Archive';

class SideNav extends Component {
  state = {};

  getAuthNavs() {
    const {role} = this.context.store.user;
    let navList = [
      {
        label: 'Home',
        icon: <HomeIcon/>,
        link: '/'
      }, {
        label: 'Users',
        icon: <PeopleIcon/>,
        link: '/action/users'
      }, {
        label: 'Rooms',
        icon: <RoomIcon/>,
        link: '/action/rooms'
      }, {
        label: 'Lead Instructor',
        icon: <PersonIcon/>,
        link: '/action/lead-instructor'
      }, {
        label: 'Deadline',
        icon: <TodayIcon/>,
        link: '/action/deadline'
      }, {
        label: 'Requests',
        icon: <SendIcon/>,
        link: '/action/requests'
      }, {
        label: 'Activity Logs',
        icon: <SubjectIcon/>,
        link: '/view/logs'
      }, {
        label: 'Export',
        icon: <FileDownloadIcon/>,
        link: '/action/export'
      }, {
        label: 'Print',
        icon: <PrintIcon/>,
        link: '/action/print'
      }, {
        label: 'Archive',
        icon: <ArchiveIcon/>,
        link: '/action/archive'
      }
    ];

    if (role !== "admin") {
      let authNavs = navList.filter(nav => nav.label === 'Home' || nav.label === "Print" || nav.label === "Export");
      return authNavs;
    } 
    return navList;
  }

  render() {
    const {classes, theme, open, onSideNavClose} = this.props;

    const authNavs = this.getAuthNavs() ;
    const sideList = (
      <div className={classes.root}>
        <List>
        {authNavs.map((nav, index) => (
              <Link key={index} to={nav.link} 
                 className={classes.link}>
                 <ListItem button style={{padding: 18}}>
                    <ListItemIcon>
                        {nav.icon}
                    </ListItemIcon>
                    <ListItemText inset primary={nav.label} />
                 </ListItem>
                 {/* <Divider /> */}
                {/* <MenuItem>{nav.label}</MenuItem> */}
              </Link>
        ))}
        </List>
      </div>
    );

    return (
      <Drawer
        variant="persistent"
        open={open}
        classes={{
        paper: classes.drawerPaper
      }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onSideNavClose}>
            {theme.direction === "rtl"
              ? (<ChevronRightIcon/>)
              : (<ChevronLeftIcon/>)}
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

export default withStyles(styles, {withTheme: true})(SideNav);
