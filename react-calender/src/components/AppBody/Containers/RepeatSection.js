import React from 'react';
import Paper from "material-ui/Paper";
import Input, { InputLabel } from "material-ui/Input";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import {withStyles} from "material-ui/styles";
import Fade from 'material-ui/transitions/Fade';
import Grow from 'material-ui/transitions/Grow';
import Collapse from 'material-ui/transitions/Collapse';
// import {TimePicker} from '@atlaskit/datetime-picker';
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import TimePicker from "material-ui-pickers/TimePicker";
import moment from 'moment';

const styles = theme => ({
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 2,
      }),
    weekInputs: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '5px'
    },
    timePicker:{
        flex: 1,
        width: '20px',
        // flexBasis: '40px' ,
        textAlign: 'center',
    }, 
    dayLabel: {
        // marginRight: 40,
        // marginLeft: 40,
        padding: 5,
        textAlign: 'center',
        // flexBasis: '100px',
        height: 20,
        flex: 1,
        border: '1px solid #2471A3',
    }
});

class RepeatSection extends React.Component {

    state = {
    }

    handleSelectWeekday = (event) => {
        event.currentTarget.classList.toggle("select");
        let day = event.currentTarget.getAttribute('data-value');
        this.props.onSaveWeekDay('add', {day: day, from: null, to: null});
    }
    
    //save time for each week day selection
    handleTimeSelect = (day, f) => (date) => {
        if (f === 'from')
            this.props.onSaveWeekDay('update', {day: day, from: date, to: null});
        if (f === 'to')
            this.props.onSaveWeekDay('update', {day: day, from: null, to: date});
        console.log(day, f);
        console.log(date);
    }

    render() {
        const {classes} = this.props;
        const { display, numOfWeeks, onInputChange} = this.props;
        // if (!display) return null;

        return (
            <Fade in={display}>
                <Paper className={classes.paper} elevation={3}>
                    <WeekButtons onSelectWeekday={this.handleSelectWeekday} />
                    <br />
                    {Object.entries(this.props.selected).map(([day, [from,to]], index)=>(
                        <Grow in={true} key={index}>
                            <div className={classes.weekInputs}>
                                <Typography color='primary' className={classes.dayLabel} variant="button">
                                    {moment()._locale._weekdays[day]}
                                </Typography>
                                &nbsp;&nbsp;&nbsp;<span style={{color:'gray'}}> FROM </span>
                                <div className={classes.timePicker}>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <TimePicker style={{width: 100}} value={from} onChange={this.handleTimeSelect(day, 'from')} />
                                    </MuiPickersUtilsProvider>
                                </div>
                                <span style={{color:'gray'}}> TO </span>
                                <div className={classes.timePicker}>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <TimePicker style={{width: 100}} value={to} onChange={this.handleTimeSelect(day, 'to')} />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
                        </Grow>
                    ))}
                    <br />
                    <div style={{textAlign: 'center'}}>
                        <span style={{color: 'gray'}}>For next</span>
                        <TextField
                            label="No.of Weeks"
                            name="numOfWeeks"
                            type="number"
                            value={numOfWeeks}
                            onChange={onInputChange('numOfWeeks')}
                            style={{ width: "120px", margin: 10 }}
                        />
                        <span style={{color:'gray'}}>week/s.</span>
                    </div>
                </Paper>
            </Fade>
        );
    }
} 

const WeekButtons = (props) => {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'space-between', 
        flexWrap: 'wrap'
      },
      button: {
        height: "40px",
        width: "40px",
        // marginLeft: 40
      },
      label: {
        fontSize: '10px'
      }
    };

    const {onSelectWeekday} = props;
    const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    
    return (
      <div style={styles.container}>
      {weekDays.map((day,index)=>(
        <Button
            style={styles.button}
            variant="fab"
            onClick={onSelectWeekday}
            key={index}
            data-value={index}
        >
            <span style={styles.label}>{day}</span>
        </Button>
      ))}
      </div>
    );
  } 
  

  export default withStyles(styles)(RepeatSection);