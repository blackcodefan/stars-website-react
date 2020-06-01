import React from "react";
import {Image} from "react-bootstrap";
import Icon1 from "/images/icons/icons_1.svg"

class RentalsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="container-fluid grey-background">
                <div className="row container takealook-title">
                    <div className="col-md ">
                        <p className="pre-title">Find your ideal stay</p>
                        <h2>Take a look at our rentals</h2>
                    </div>
                    <div className="col-md takealook-button">
                        <button type="button" className=" btn btn-outline-primary">Browse Rentals</button>
                    </div>
                </div>

                <div className="row container">
                    <div className="col-xs">
                        <div className="col-md property-card">
                            <div className="home-title">
                                <h5>Brookline | St. Mary's | Coolidge Corner</h5>
                                <h3>Spacious Studio in Brownstone</h3>
                                <div className="overlay">
                                    <div className="text"><h3>View Property</h3></div>
                                </div>
                            </div>

                            <div className="row align-items-start features-property">
                                <div className="features-property-column">
                                    <ul>
                                        <li>
                                            <i className="fas fa-door-open"></i>
                                            1 Bedroom
                                        </li>
                                        <li>
                                            <i className="fas fa-user-friends"></i>
                                            Sleeps 2
                                        </li>
                                        <li>
                                            <i className="fas fa-parking"></i>
                                            Rental Parking
                                        </li>
                                    </ul>
                                </div>

                                <div className="features-property-column">
                                    <ul>
                                        <li>
                                            <i className="fa fa-bath"></i>
                                            1 Bathroom
                                        </li>
                                        <li>
                                            <i className="fas fa-couch"></i>
                                            Furnished
                                        </li>
                                        <li>
                                            <i className="fa fa-paw"></i>
                                            Pets considered
                                        </li>
                                    </ul>
                                </div>

                                <div className="features-property-column price-property">
                                    <h4>$95</h4>
                                    <p>per night</p>
                                </div>
                            </div>

                            <div className="row button-group">
                                <div className="">
                                    <button type="button" className="btn btn-outline-primary button-property">Quick book
                                    </button>
                                </div>
                                <div className="">
                                    <button type="button" className="btn btn-outline-primary button-property">View
                                        Property
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xs">
                        <div className="col-md property-card">
                            <div className="home-title">
                                <h5>Brookline | St. Mary's | Coolidge Corner</h5>
                                <h3>Spacious Studio in Brownstone</h3>
                                <div className="overlay">
                                    <div className="text"><h3>View Property</h3></div>
                                </div>
                            </div>

                            <div className="row align-items-start features-property">
                                <div className=" features-property-column">
                                    <ul>
                                        <li>
                                            <i className="fas fa-door-open"></i>
                                            1 Bedroom
                                        </li>
                                        <li>
                                            <i className="fas fa-user-friends"></i>
                                            Sleeps 2
                                        </li>
                                        <li>
                                            <i className="fas fa-parking"></i>
                                            Rental Parking
                                        </li>
                                    </ul>
                                </div>

                                <div className=" features-property-column">
                                    <ul>
                                        <li>
                                            <i className="fa fa-bath"></i>
                                            1 Bathroom
                                        </li>
                                        <li>
                                            <i className="fas fa-couch"></i>
                                            Furnished
                                        </li>
                                        <li>
                                            <i className="fa fa-paw"></i>
                                            Pets considered
                                        </li>
                                    </ul>
                                </div>

                                <div className="price-property features-property-column">
                                    <h4>$95</h4>
                                    <p>per night</p>
                                </div>
                            </div>

                            <div className="row button-group">
                                <div className="">
                                    <button type="button" className="btn btn-outline-primary button-property">Quick book
                                    </button>
                                </div>
                                <div className="">
                                    <button type="button" className="btn btn-outline-primary button-property">View
                                        Property
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xs">
                        <div className="col-md property-card">
                            <div className="home-title">
                                <h5>Brookline | St. Mary's | Coolidge Corner</h5>
                                <h3>Spacious Studio in Brownstone</h3>
                                <div className="overlay">
                                    <div className="text"><h3>View Property</h3></div>
                                </div>
                            </div>

                            <div className="row align-items-start features-property">
                                <div className=" features-property-column">
                                    <ul>
                                        <li>
                                            <i className="fas fa-door-open"></i>
                                            1 Bedroom
                                        </li>
                                        <li>
                                            <i className="fas fa-user-friends"></i>
                                            Sleeps 2
                                        </li>
                                        <li>
                                            <i className="fas fa-parking"></i>
                                            Rental Parking
                                        </li>
                                    </ul>
                                </div>

                                <div className=" features-property-column">
                                    <ul>
                                        <li>
                                            <i className="fa fa-bath"></i>
                                            1 Bathroom
                                        </li>
                                        <li>
                                            <i className="fas fa-couch"></i>
                                            Furnished
                                        </li>
                                        <li>
                                            <i className="fa fa-paw"></i>
                                            Pets considered
                                        </li>
                                    </ul>
                                </div>

                                <div className=" price-property features-property-column">
                                    <h4>$95</h4>
                                    <p>per night</p>
                                </div>
                            </div>

                            <div className="row button-group">
                                <div className="">
                                    <button type="button" className="btn btn-outline-primary button-property">Quick book
                                    </button>
                                </div>
                                <div className="">
                                    <button type="button" className="btn btn-outline-primary button-property">View
                                        Property
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        )
    }
}

export default RentalsView;