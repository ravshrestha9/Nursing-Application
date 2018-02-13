import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './Calender.css'

BigCalendar.momentLocalizer(moment);



const Calender = props => (
<div id= "calender">
    <BigCalendar
    events ={[]}
    style={{height: 800}}
    startAccessor = 'startDate'
    endAccessor = 'endDate'
    />
     </div>
);

export default Calender;