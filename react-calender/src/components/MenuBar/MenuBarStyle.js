
const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    position: 'relative'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  }
});

export default styles;