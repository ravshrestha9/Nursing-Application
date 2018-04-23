
import createReactContext from 'create-react-context'; 

export const EventFormContext = React.createContext({
    openEventForm: false,
    handleOpenEventForm: () => {},
    role: ''
});

export const AppContext = React.createContext({
    authorized: false,
    user: {},
    events: {}
});
