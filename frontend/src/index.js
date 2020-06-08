import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "font-awesome/css/font-awesome.css"
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { history } from "./_helper/history";
import { store } from './_helper/store';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Provider store={store} history={history}>
        <App/>
    </Provider>

), document.getElementById('root'));


serviceWorker.unregister();
