import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { history } from "./_helper/history";
import { store } from './_helper/store';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>

), document.getElementById('root'));


serviceWorker.unregister();
