

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '80%',
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
     backgroundColor: '#f7f7f1',
    boxShadow: '7px 0px 22px -9px rgba(0,0,0,0.75)',
    alignItems:'center'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  
  

});

export default styles;