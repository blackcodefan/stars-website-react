import "./assets/styles/main.scss";

import React from "react";
import {BrowserRouter, Router, Route, Switch } from "react-router-dom";
import {history} from "./_helper/history"

import Homes from "./pages/Homes/Homes";
import About from "./pages/About/About";
import Footer from "./components/layout/Footer";
import PropertyListing from "./pages/Property/PropertyListing";
import PropertyDetail from "./pages/Property/PropertyDetail";
import connect from "react-redux/es/connect/connect";
import Locations from "./pages/Locations/Locations";
import Medical from "./pages/Medical-Corporate/Medical";
import CheckOutFirstPage from "./pages/CheckOut/CheckOutFirstPage";
import CheckOutSecondPage from "./pages/CheckOut/CheckOutSecondPage";
import CheckOutThirdPage from "./pages/CheckOut/CheckOutThirdPage";
import ComingSoon from "./pages/Others/ComingSoon";
import PageNotFound from "./pages/Others/PageNotFound";


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

                            <Route path="/property/:id" component={PropertyDetail}/>
                            <Route path="/property" component={PropertyListing}/>
                            <Route path="/checkout" component={CheckOutFirstPage}/>
                            <Route path="/checkout-review" component={CheckOutSecondPage}/>
                            <Route path="/checkout-payment" component={CheckOutThirdPage}/>
                            <Route path="/about" component={About}/>
                            <Route path="/services" component={ComingSoon}/>
                            <Route path="/blog" component={ComingSoon}/>
                            <Route path="*" component={PageNotFound}/>
                        </Switch>
                    </Router>
                </BrowserRouter>
                <Footer/>
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

