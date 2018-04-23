import React from 'react';
import PropTypes from 'prop-types';

import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';


class RootProvider extends React.Component {
    state = {
        authenticated: false,
        user: null,  //user related information
        events: []
    };

    // componentWillReceiveProps(newProps) {
    //     console.log(newProps.authorized);
    //     this.setState({authorized: newProps.authorized, user: newProps.user});
    // }

    componentWillMount() {
        console.log('root mount');
                
        if (localStorage.token){
            console.log('authorized at root');
            this.setLoggedIn(localStorage.token);
        }
        // const authorized = true;
        // const user = {username: 'admin', role: 'admin', permission: 'ALL'}
        // this.setState({authorized: authorized, user: user});
    }

    setLoggedIn = (token) => {
        localStorage.setItem('token', token);
        setAuthorizationToken(token);
        const {user, authenticated, ...rest} = jwt.decode(token);
        this.setState({authenticated: authenticated, user: user});
    }

    setLoggedOut = () => {
        localStorage.clear();
        setAuthorizationToken('');
        this.setState({authenticated: false, user: null});
    }

    setEvents = (newEvents) => {
        let curEvents = [...this.state.events];
        this.setState({events: curEvents.concat(newEvents)});
    }

    getChildContext() {
        return {
            store: {
                authenticated: this.state.authenticated,
                user: this.state.user,
                events: this.state.events
            },
            actions: {     
                setLoggedIn: this.setLoggedIn,
                setLoggedOut: this.setLoggedOut,
                setEvents: this.setEvents,
            }
        };
    }

    render() {    
        const props = {
            authed: this.state.authenticated,
            user: this.state.user,
            setLoggedIn: this.setLoggedIn, 
            setLoggedOut: this.setLoggedOut
        };
        return (
            <div>
               {this.props.children({...props})}
            </div>
        );
    }
}

RootProvider.childContextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object
};

export default RootProvider;
