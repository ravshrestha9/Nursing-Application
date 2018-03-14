
const drawerWidth = 240;
const styles = theme => ({
    content: {
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-right': {
        marginLeft: +drawerWidth,
    }
});

export default styles;