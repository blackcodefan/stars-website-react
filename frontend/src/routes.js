import React from 'react';
import {Route, IndexRoute } from 'react-router-dom';
import Homes from "./pages/Homes/Homes";
import Locations from "./pages/Locations/Locations";
import Medical from "./pages/Medical-Corporate/Medical";
import PropertyListing from "./pages/Property/PropertyListing";
import PropertyDetail from "./pages/Property/PropertyDetail";
import CheckOutFirstPage from "./pages/CheckOut/CheckOutFirstPage";
import CheckOutSecondPage from "./pages/CheckOut/CheckOutSecondPage";
import CheckOutThirdPage from "./pages/CheckOut/CheckOutThirdPage";
import About from "./pages/About/About";
import ComingSoon from "./pages/Others/ComingSoon";
import App from "./App";


export default (
    <Route path="/" component={App}>
        <Route path="/" component={Homes}/>
        <Route path="/homes" component={Homes}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/medical" component={Medical}/>
        <Route path="/property" component={PropertyListing}/>
        <Route path="/property-detail" component={PropertyDetail}/>
        <Route path={"/property/:id"} exact component={PropertyDetail}/>
        <Route path="/checkout" component={CheckOutFirstPage}/>
        <Route path="/checkout-review" component={CheckOutSecondPage}/>
        <Route path="/checkout-payment" component={CheckOutThirdPage}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={ComingSoon}/>
        <Route path="/blog" component={ComingSoon}/>
    </Route>
);