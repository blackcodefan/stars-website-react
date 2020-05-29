import "./assets/styles/main.scss";

import React from "react";
import {BrowserRouter, Router, Route, Switch, Redirect} from "react-router-dom";
import {history} from "./_helper/history"

import Home from "./pages/Home";
import About from "./pages/About";
import FooterView from "./components/layout/FooterView";
import PropertyListing from "./pages/PropertyListing";
import PropertyDetail from "./pages/PropertyDetail";
import connect from "react-redux/es/connect/connect";
import agent from "./_services/agent";


const App = () => {
    React.useEffect(() => {
        console.log('ComponentDidMount')
        return () => {
            const token = window.localStorage.getItem('jwt');
            if (token) {
                agent.setToken(token);
            }
        }
    })

    return (
        <>
            <BrowserRouter>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/property-listing" component={PropertyListing}/>
                        <Route path="/property-detail" component={PropertyDetail}/>
                        <Route path="/about" component={About}/>
                        <Route component={Error}/>
                    </Switch>
                </Router>
            </BrowserRouter>
            <FooterView/>
        </>
    );
};

const mapStateToProps = state => {
    return {
        idAuthenticated: state.authentication.loggedIn,
        user: state.authentication.user,
    }
};


export default connect(mapStateToProps)(App);

