import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import RoomTable from './RoomTable';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
// import { Typography } from "material-ui/styles";s

const styles = {
    anchorButton: {
        width: 300,
        boxShadow: 'none',
        marginLeft: '-30'
    },
    info:{}
};

export default class FindRoom extends React.Component {
  state = {
    open: false
  };

  handleRoomSelect = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

//   handleSaveRoom = (room) => {
//     console.log(room);
//     this.setState({selectedRoom: room});
//   };


  getInfo = () => {
    if (!this.props.selectedRoom || this.props.selectedRoom.Status !== 'Booked') {
        return null;
    }
    let {selectedRoom: room} = this.props;
    let title = "This room is booked for the following event."; 

    return (
        <div>
            <Typography 
                color='error' 
                align='center'
                variant='subheading'
                gutterBottom ={true}
            >
                {title}
            </Typography>
            <Typography 
                align='center'
                variant='subheading'
                gutterBottom ={true}
            >
                {"Event: " + room.Course + ",   TimeRange: " + room.ConflictTimeRange + ",    CreatedBy: " + room.Owner + " ("+ room.CWID + ")"} 
            </Typography>
        </div>
    )
  }

  render() {
    
    return (
      <div>
        <div style={{textAlign: 'center'}}>
         <Button 
            variant='raised' 
            color='inherit' 
            onClick={this.handleRoomSelect}
            style={styles.anchorButton}
         >
            {this.props.selectedRoom.RoomNo ? 'Room ' + this.props.selectedRoom.RoomNo : 'Select Room'}
        </Button>
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullScreen = {true}
        >
          <DialogTitle id="form-dialog-title">
            Select Room
          </DialogTitle>
          <DialogContent>
            <div className='info'>
                {this.getInfo()}
            </div>
            <RoomTable 
                onSelectRoom={this.props.onSelectRoom} 
                times = {this.props.calculateRoomTimes()}
            />
            {/* <div style={{ height: 200 }} /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Select
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
