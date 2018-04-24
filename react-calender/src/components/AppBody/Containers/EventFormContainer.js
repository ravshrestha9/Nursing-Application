import React from "react";
import EventForm from './EventForm';
import {storeCalendarEvent, getCalendarEvent, getMyCourseAndSection} from "../../../services/services";
import moment from 'moment';
import PropTypes from 'prop-types';

class EventFormContainer extends React.Component {

    state = {
        eventType: "Lecture",
        title: "",
        selectedCourse: "",
        selectedCrn: [],
        startDate: new Date(),
        startTime: null,
        endDate: new Date(),
        endTime: null,
        selectedRoom: {},
        repeat: false,
        leadNotes: "",
        crnNotes: "",
        selectedWeekdays: {},
        numOfWeeks: "1",
        crn: [],
        course: {"1": ["1", "1"],"2": ["1"]},
        idToCourse: {'1': 'NURS 1020', '2': 'NURS 1009'},
        idToSection: {},
        times: []
    };

    componentDidMount() {
        if (this.props.eventId) {
            getCalendarEvent(this.props.eventId)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        getMyCourseAndSection()
            .then(result=>{
                console.log(result.data);
                this.setState({
                    course: result.data[0], 
                    idToCourse: result.data[1], 
                    idToSection: result.data[2]
                });
            })
            .catch(err => {
                console.log("Error fetching courses and sections");   
            })
        //getCourses().then();
    }

    handleFormClose = () => {
        this.setState({
            eventType: "Lecture",
            title: "",
            selectedCourse: "",
            selectedCrn: [],
            startDate: new Date(),
            startTime: new Date(),
            endDate: new Date(),
            endTime: new Date(),
            selectedRoom: {},
            repeat: false,
            leadNotes: "",
            crnNotes: "",
            selectedWeekdays: {},
            numOfWeeks: "1",
            crn: [],
            course: {"NURS 1020": ["12345", "23455"],"NURS 1009": ["31245"]},
            times: []
        });
        this.props.closeEventForm();
    };

    handleRoomSelect = (room) => {
        this.setState({selectedRoom: room});
    }

    handleInputChange = (input) => event => {
       
        if (input === 'crn') {
            let selected = [...this.state.selectedCrn];
            // selected.push(event.target.value[event.target.value.length-1]);
            this.setState((prevState)=>{
                console.log("Selected CRN : " + event.target.value);
                return {selectedCrn: event.target.value};
            });
            
        } else if (input === 'repeat') {
            this.setState({
                'repeat': event.target.checked, 
                selectedRoom: {}, 
                selectedWeekdays: {}
            }); 
        } else if (input === 'course') {
            //getSections();
            //and set value for crns
            // console.log('Selected Course ' + event.target.value);
            this.setState({selectedCourse: event.target.value}, ()=>{
                let selectedCrn = [...this.state.selectedCrn];
                selectedCrn.splice(0);
                this.setState({selectedCrn: selectedCrn});
                // console.log(this.state.course[this.state.selectedCourse]);
                // console.log(this.state.idToCourse[this.state.selectedCourse]);
            }); 
        } else {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    };

    handleDateChange = (input) => (date) => {
        this.setState({[input]: date});
    }   

    setSections = (course) =>{
        console.log('section for course ', course, ' was set.');
    }

      //calculates exact date for the day of week relative to the week of given date
    jumpToDate = (date, dayOfWeek) => {
        let diff = dayOfWeek - moment(date).day();

        console.log(dayOfWeek, moment(date).day());
        return moment(date, "MM-DD-YYYY").add(diff, 'days').format('YYYY-MM-DD');
    }
    
    handleSaveWeekday = (action, {day, from, to}) => {
        let selectedDays = {...this.state.selectedWeekdays};

        if (action === 'add'){
            if (selectedDays.hasOwnProperty(day))
                delete selectedDays[day];
                // selectedDays.splice(selectedDays.indexOf(day), 1)
            else {
                selectedDays[day] = [from,to];
            }
        } else if (action === 'update') {
            if (from) {
                selectedDays[day][0] = from;
            }
            if (to) {
                selectedDays[day][1] = to;
            }
        }

        this.setState({
            selectedWeekdays: selectedDays
        });
    };

    calculateRoomTimes = () => {
        const {repeat, startDate, endDate, selectedWeekdays, startTime, endTime} = this.state;
        let times = [];

        if ((startTime && endTime) || Object.keys(selectedWeekdays).length !== 0) {
            if (repeat) {
            Object.entries(selectedWeekdays).forEach(([weekDay, [from, to]])=>{
                // console.log(from === null);
                if (from !== null && to !== null) {
                let startTime = from.format("HH:mm:ss");
                let endTime = to.format("HH:mm:ss");
                times.push({
                    start: this.jumpToDate(startDate, weekDay) + ' ' + startTime,
                    end: this.jumpToDate(startDate, weekDay) + ' ' + endTime
                });
                }
            })
            } else {
                times.push({
                    start: moment(startDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + ' ' + moment(startTime, 'HH:mm:ss').format('HH:mm:ss'), 
                    end: moment(endDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + ' ' + moment(endTime, 'HH:mm:ss').format('HH:mm:ss')
                });
            }
        }
        return times;
        // this.setState({times: times});
    }

    handleCourseSelect = (course) => {
        //getSections(course).then(data=>{})
    }

    handleEventSave = () => {

        const datetime = moment((new Date())).format("YYYY-MM-DD HH:mm:ss"); 
        let eventTemplate = {
            type: this.state.eventType,
            courseId: + this.state.idToCourse[this.state.selectedCourse],
            title: this.state.title,
            sectionId: '',
            locationId: + this.state.selectedRoom.RoomId,
            status: "approved",
            groupId: '',
            eventStart: this.state.startDate + " " + this.state.startTime,
            eventEnd: this.state.endDate + " " + this.state.endTime,
            note1: this.state.leadNotes,
            note2: this.state.crnNotes,
            created: datetime,
            createdBy: + this.context.store.user.cwid,
        };

        // let events = [];
        // let groupId = + new Date();
        // this.state.selectedCrn.forEach((crn)=>{
        //     let sectionId = + this.state.idToSection[crn];
        //     let event = {...eventTemplate};
        //     event.sectionId = sectionId;
        //     event.groupId = groupId;
        //     events.push(event);
        // });

        let allDates = [];
        if (this.state.repeat) {

            let dates = Object.entries(this.state.selectedWeekdays).map(([weekDay, [from, to]])=>{
                let n = this.state.numOfWeeks;
                let day = + weekDay;
                for (let i = 0; i < n; i++) {
                    let date = this.jumpToDate(this.state.startDate, day);
                    let fromDate = date + " " + from.format('HH:mm:ss');
                    let toDate = date + " " + to.format('HH:mm:ss');
                    allDates.push({from: fromDate, to: toDate});
                    day = day + 7;
                }
            });
        }

        let events = [];
        allDates.forEach((date, index)=>{
            let groupId = ( + new Date() ) * (index+1);
            this.state.selectedCrn.forEach((crn)=>{
                console.log(this.state.idToSection[crn]);
                let sectionId = + this.state.idToSection[crn];
                let event = {...eventTemplate};
                event.sectionId = sectionId;
                event.groupId = groupId;
                event.eventStart = date.from;
                event.eventEnd = date.to;
                events.push(event);
            });
        }); 
        // console.log(allDates);
        console.log(events);

        storeCalendarEvent(events)
            .then((response) => {
                console.log(response.data);
                getCalendarEvent()
                .then((response)=>{
                    let data = response.data;
                    let newEvents = data.map((event)=>{
                        return {
                        id: event.GroupId || event.EventScheduleId,
                        title: event.Course + ' ' + 'Rm: ' + event.Room,
                        start: new Date(event.EventStart),
                        end: new Date(event.EventEnd),
                        desc: event.Note1 + " " + event.Note2,
                        room: event.Room,
                        color: event.Color,
                        crn: event.crn
                        };
                    });   
                    this.context.actions.setEvents(newEvents);
                    this.handleFormClose();
                })
                .catch(err=>{
                    console.log(err);
                })

                // if (this.state.title && this.state.startDate && this.state.endDate) {
                //     this.context.actions.addEvent({
                //         id: 1000,
                //         title: this.state.title,
                //         start: new Date(this.state.startDate + " " + this.state.startTime),
                //         end: new Date(this.state.endDate + " " + this.state.endTime),
                //     });
                // }
            })
            .catch((err) => {
                console.log("Error parsing response: " + err);
            });

        

        
    }

    render() {
        const props = {
            ...this.state, 
            ...this.props,
            onFormClose : this.handleFormClose,
            onInputChange: this.handleInputChange,
            onSaveWeekDay: this.handleSaveWeekday, 
            onEventSave: this.handleEventSave,
            onDateTimeChange: this.handleDateChange,
            onSelectRoom: this.handleRoomSelect,
            calculateRoomTimes: this.calculateRoomTimes,
        };

        return (
            <EventForm {...props}/>
        )
    }
}


EventFormContainer.contextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object
};

export default EventFormContainer;