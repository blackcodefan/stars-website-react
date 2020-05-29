import React from "react";


class PropertyListingView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <section className="container-fluid">
                    <div className="row container propertyfilterparent justify-content-between">

                        <a href="#" data-filter=".privaterooms" className="current col-md propertyfilter text-center">Private
                            Rooms</a>
                        <a href="#" data-filter=".studios" className="col-md propertyfilter text-center">Studios</a>
                        <a href="#" data-filter=".1bed" className="col-md propertyfilter text-center">1-Bedroom</a>
                        <a href="#" data-filter=".2bed" className="col-md propertyfilter text-center">2-Bedrooms</a>
                        <a href="#" data-filter=".3bed" className="col-md propertyfilter text-center">3-Bedrooms</a>
                        <a href="#" data-filter=".4bed" className="col-md propertyfilter text-center">4-Bedrooms</a>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row container takealook-title">
                        <div className="col-md ">
                            <h2>Private Rooms</h2>
                        </div>
                    </div>

                    <div className="row container">
                        <div className="col-xs">
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                    <div className="row container">
                        <div className="col-xs">
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                    <div className="row container">
                        <div className="col-xs">
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
                            <div className="col-md single-property">
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
                                                <i className="fas fa-bath"></i>
                                                1 Bathroom
                                            </li>
                                            <li>
                                                <i className="fas fa-couch"></i>
                                                Furnished
                                            </li>
                                            <li>
                                                <i className="fas fa-paw"></i>
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
                                        <button type="button" className="btn btn-outline-primary button-property">Quick
                                            book
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
            </>
        )
    }
}

export default PropertyListingView;