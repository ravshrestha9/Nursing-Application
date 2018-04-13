import React from "react";
import EventForm from './EventForm';

export default class EventFormContainer extends React.Component {

    state = {};

    onComponentWillReceiveProps(props) {
        this.state = props;    
    }

    render() {
        const props = {};
        return (
            <EventForm {...props} />
        )
    }
}
