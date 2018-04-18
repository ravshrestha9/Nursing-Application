
import React from 'react';
import createReactContext from 'create-react-context'; 

export const EventFormContext = createReactContext({
    openEventForm: false,
    handleOpenEventForm: () => {},
    role: '',
    view: ''
});