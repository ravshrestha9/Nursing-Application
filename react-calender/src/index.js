import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './modules/MainRouter';
import RootProvider from './modules/RootProvider'; 

import './index.css';
require("react-big-calendar/lib/css/react-big-calendar.css")

ReactDOM.render(
    <RootProvider>
        {({authorized, user, ...rest}) => (
            <MainRouter authed={authorized} user={user} {...rest}/>
          )
        }
    </RootProvider>, 
    document.getElementById('root')
);
