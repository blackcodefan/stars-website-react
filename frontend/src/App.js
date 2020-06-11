import "./assets/styles/main.scss";

import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";
import {history} from "./_helper/history"

import Apartments from "./Guest/pages/Apartments/Apartments";
import About from "./Guest/pages/About/About";
import PropertyListing from "./Guest/pages/Property/PropertyListing";
import PropertyDetail from "./Guest/pages/Property/PropertyDetail";
import connect from "react-redux/es/connect/connect";
import Locations from "./Guest/pages/Locations/Locations";
import Medical from "./Guest/pages/Medical-Corporate/Medical";
import CheckOutStart from "./Guest/pages/CheckOut/CheckOutStart";
import CheckOutReview from "./Guest/pages/CheckOut/CheckOutReview";
import CheckOutPayment from "./Guest/pages/CheckOut/CheckOutPayment";
import ComingSoon from "./Guest/pages/Others/ComingSoon";
import ContactUs from "./Guest/pages/ContactUs/ContactUs";
import Terms from "./Guest/pages/Others/TermsPage";
import Privacy from "./Guest/pages/Others/PrivacyPolicyPage";
import CancellationPolicy from "./Guest/pages/Others/CancellationPolicy";


class App extends React.Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Apartments}/>
                            <Route exact path="/apartments" component={Apartments}/>
                            <Route exact path="/locations" component={Locations}/>
                            <Route exact path="/medical" component={Medical}/>
                            <Route exact path="/property" component={PropertyListing}/>
                            <Route exact path="/property/:id" component={PropertyDetail}/>
                            <Route exact path="/checkout/:id" component={CheckOutStart}/>
                            <Route exact path="/checkout-review" component={CheckOutReview}/>
                            <Route exact path="/checkout-payment" component={CheckOutPayment}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/services" component={ComingSoon}/>
                            <Route exact path="/blog" component={ComingSoon}/>
                            <Route exact path="/terms-and-conditions" component={Terms}/>
                            <Route exact path="/privacy-policy" component={Privacy}/>
                            <Route exact path="/cancellation-policy" component={CancellationPolicy}/>
                            <Route exact path="/contact" component={ContactUs}/>
                            <Route exact path="" component={ComingSoon}/>
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

