import "./assets/styles/main.scss";

import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";
import {history} from "./_helper/history"

import Homes from "./Guest/pages/Homes/Homes";
import About from "./Guest/pages/About/About";
import PropertyListing from "./Guest/pages/Property/PropertyListing";
import PropertyDetail from "./Guest/pages/Property/PropertyDetail";
import connect from "react-redux/es/connect/connect";
import Locations from "./Guest/pages/Locations/Locations";
import Medical from "./Guest/pages/Medical-Corporate/Medical";
import CheckOutFirstPage from "./Guest/pages/CheckOut/CheckOutFirstPage";
import CheckOutSecondPage from "./Guest/pages/CheckOut/CheckOutSecondPage";
import CheckOutThirdPage from "./Guest/pages/CheckOut/CheckOutThirdPage";
import ComingSoon from "./Guest/pages/Others/ComingSoon";


class App extends React.Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Homes}/>
                            <Route exact path="/homes" component={Homes}/>
                            <Route exact path="/locations" component={Locations}/>
                            <Route exact path="/medical" component={Medical}/>
                            <Route exact path="/property" component={PropertyListing}/>
                            <Route exact path="/property/:id" component={PropertyDetail}/>
                            <Route exact path="/checkout/:id" component={CheckOutFirstPage}/>
                            <Route exact path="/checkout-review" component={CheckOutSecondPage}/>
                            <Route exact path="/checkout-payment" component={CheckOutThirdPage}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/services" component={ComingSoon}/>
                            <Route exact path="/blog" component={ComingSoon}/>
                            <Route exact path="/contact" component={ComingSoon}/>
                            <Route exact path="/contact" component={ComingSoon}/>
                        </Switch>
                    </Router>
                </BrowserRouter>

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

