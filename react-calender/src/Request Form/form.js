import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';

import './form.css';

class RequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            open: false
        };
    }

    // componentDidMount () {
    //     this.setState({open: this.props.showForm});
    // }

    handleChange = (event, index, value) => this.setState({ value });

    handleClose = () => {
        this.setState({open: false});
        this.props.hideForm();
    };

    componentWillReceiveProps(newProps) {
        this.setState({open: newProps.showForm});
    }

    render() {
        console.log('State in Form: ' + this.props.showForm);
        return (
            
            // contentStyle={{ width: '70%'}}
            <Dialog
                title="Request Form"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose.bind(this)}
                autoScrollBodyContent={true}
                style = {{height: '100vh !important' , maxHeight:'100vh', textAlign: 'center'}}
                bodyStyle = {{height:'900px', maxHeight:'100vh'}}
            >
                {/* <Paper inset={true} style={{width: 500, margin: "0 auto"}}> */}
                <TextField
                    floatingLabelText="Course Name"
                    floatingLabelFixed={true}

                />
                <br />
                <TextField
                    floatingLabelText="CRN"
                    floatingLabelFixed={true}
                /><br />

                <DropDownMenu value={this.state.value} onChange={this.handleChange}
                    style={{ width: 300 }} autoWidth={false} openImmediately={false}>
                    <MenuItem value={0} primaryText="Select Semester" />
                    <MenuItem value={1} primaryText="Semester 1" />
                    <MenuItem value={2} primaryText="Semester 2" />
                    <MenuItem value={3} primaryText="Semester 3" />
                    <MenuItem value={4} primaryText="Semester 4" />
                    <MenuItem value={5} primaryText="Semester 5" />
                </DropDownMenu>

                <br />
                <TextField
                    defaultValue="Default Value"
                    floatingLabelText=" Start Time"
                    type="time"
                /><br />

                <TextField
                    defaultValue="Default Value"
                    floatingLabelText=" End Time"
                    type="time"
                /><br />

                <TextField
                    floatingLabelText="Room Number"
                    floatingLabelFixed={true}
                /><br /> <br />
                <textArea id="txt" name="Notes" rows="4" cols="40">Enter your Notes </textArea><br />
                <br />
                <RaisedButton label="Request" primary={true} />
                <br />
                <br />
                <br />

                {/* </Paper> */}
            </Dialog>
        );

    }
}

export default RequestForm;