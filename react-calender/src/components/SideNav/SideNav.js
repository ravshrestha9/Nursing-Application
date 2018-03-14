import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import List from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import styles from './SideNavStyle';


class SideNav extends Component {
  state = {

  };


  render() {
    const { classes, theme } = this.props;
    let navList = ['Users', 'Room', 'Requests', 'Logs','Export', 'Print', 'Archive'];
    let role = 'student';
    let authNavs = []

    if (role == 'student'){
      authNavs = navList.filter((nav) => nav == 'Print' || nav == 'Export');
    }
    else {
      authNavs = navList;
    }

    return (
      
         <Drawer
            variant="persistent"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            {authNavs.map((nav, index) => 
                <List key={index}>{nav}</List>
            )}  
          </Drawer>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideNav);