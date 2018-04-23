

const drawerWidth = 240;
const styles = theme => ({

  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    width: '100%',
    
  },
//   'appBarShift-left': {
//     marginLeft: drawerWidth,
//   },
//   'appBarShift-right': {
//     marginRight: drawerWidth,
//   },

  drawerPaper: {
    position: 'absolute',
    width: drawerWidth,
    // backgroundColor: '#f2f1ef',
    boxShadow: '7px 0px 22px -9px rgba(0,0,0,0.75)',
  },
  link: {
    textDecoration: 'none',
    color: '#2471A3'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  list: {
    width: 250,
  },
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  

});

export default styles;