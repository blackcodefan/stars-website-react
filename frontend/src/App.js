import "./assets/styles/main.scss";

import React from "react";
import {BrowserRouter, Router, Route, Switch } from "react-router-dom";
import {history} from "./_helper/history"

import Homes from "./pages/Homes/Homes";
import About from "./pages/About/About";
import FooterView from "./components/layout/FooterView";
import PropertyListing from "./pages/Property/PropertyListing";
import PropertyDetail from "./pages/Property/PropertyDetail";
import connect from "react-redux/es/connect/connect";
import Locations from "./pages/Locations/Locations";
import Medical from "./pages/Medical-Corporate/Medical";


class App extends React.Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Homes}/>
                            <Route path="/homes" component={Homes}/>
                            <Route path="/locations" component={Locations}/>
                            <Route path="/medical" component={Medical}/>
                            <Route path="/property" component={PropertyListing}/>
                            <Route path="/property-detail" component={PropertyDetail}/>
                            <Route path="/property/:id" component={PropertyDetail}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </Router>
                </BrowserRouter>
                <FooterView/>
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        idAuthenticated: state.authentication.loggedIn,
        user: state.authentication.user,
    }
};


export default connect(mapStateToProps)(App);

