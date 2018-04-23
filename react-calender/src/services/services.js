import axios from 'axios';

const baseUrl = 'http://35.185.78.228';

export const authenticate = (user, pass) => {
    if (user && pass) {
        const data = {username: user, password: pass};
        const url = baseUrl + "/login";

        return axios.post(url, data);
    }
    return null;
};

export const getCalendarEvents = () => {
    let url = baseUrl + '/calendar/events';
    // if (role && role !== 'admin') {
    //     url = `${baseUrl}/calendar/events?cwid=${cwid}&role=${role}`;
    // }
    return axios.get(url);
} 

export const getCalendarEvent = (eventId) => {
    let url = baseUrl + '/calendar/events?' + eventId;
    return axios.get(url); 
}

export const storeCalendarEvent = (event) => {
    let url = baseUrl + "/calendar/events";
    return axios.post(url, event);
}  


export const getAvailableRooms = (timeRanges) => {
    let url = baseUrl + "/calendar/create-event/available-rooms";
    return axios.post(url, timeRanges);
}

export const getMyCourseAndSection = () => {
    let url = baseUrl + "/calendar/create-event/course-section";
    return axios.get(url);
}
