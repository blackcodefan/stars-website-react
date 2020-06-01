import React from "react";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import SearchBox from "../../components/sections/SearchBox";

const property = {
    id: 1,
    address: "Brookline | St. Mary's | Coolidge Corner",
    title: "Spacious Studio in Brownstone",
    price: "99",
    countBed: 2,
    countSleep: 2,
    countBath: 2,
    rentalParking: true,
    furnished: true,
    petsConsidered: true,
    bgImgLink: "example1.png",
    category: "private"
}

class PropertyDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            address: '',
            title: '',
            price: '',
            countBed: '',
            countSleep: '',
            countBath: '',
            rentalParking: '',
            furnished: '',
            petsConsidered: '',
            bgImgLink: '',
            category: '',
            amenities: [],
            locations: [],
            neighborhoods: [],
            similarAccommodations: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <header>
                    <section className="container-fluid main-background-property">
                        <HeaderNavbar/>

                        <div className="container property-details-title">
                            <div className="row">
                                <div className="col-sm">
                                    <h1>Sunny Top Floor Private Room</h1>
                                    <p>Brookline | st. Mary's | coolidge corner</p>
                                </div>
                                <div className="property-details-buttons col-sm text-right align-self-end">
                                    <button type="button" className="btn btn-outline-primary button-icon360"><i
                                        className="icon360-2"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary">View All Photos</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>

                <section class="checkout-main container-fluid">
                    <div class="row align-items start container align-items-start">

                        <div class="col-xl-7 checkout-booking-info">
                            <div class="row align-items-center">
                                <div class="col-sm">

                                    <div class="details-icons">
                            <span>
                                <i class="fas fa-couch"></i>
                                 Furnished
                            </span>
                                        <span>
                                <i class="fas fa-user-friends"></i>
                                 Sleeps 2
                            </span>
                                        <span>
                                <i class="fas fa-door-open"></i>
                                 1 Bedroom
                            </span>
                                        <span>
                                <i class="fas fa-bath"></i>
                                 1 Bathroom
                            </span>
                                        <span>
                                <i class="fas fa-parking"></i>
                                 Rental Parking
                            </span>

                                    </div>

                                    <div class="details-buttons">
                                        <button type="button" class="btn btn-outline-primary">Overview</button>
                                        <button type="button" class="btn btn-outline-primary active">Amenities</button>
                                        <button type="button" class="btn btn-outline-primary">Location</button>
                                        <button type="button" class="btn btn-outline-primary">Neighborhood</button>
                                        <button type="button" class="btn btn-outline-primary">Transit</button>
                                    </div>

                                    <h3>Amenities</h3>

                                    <h5>General</h5>
                                    <div class="row container align-items-center property-details">
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3>Amenities</h3>

                                    <h5>General</h5>
                                    <div class="row container align-items-center property-details">
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <h5>Bathrooms</h5>
                                    <div class="row container align-items-center property-details">
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h5>Bedrooms</h5>

                                    <div class="icons-bedroom-details">
                                        <img src="images/icons/bed-king.svg" alt="icon"/>
                                        <img src="images/icons/bed-queen.svg" alt="icon"/>
                                        <img src="images/icons/bed-queen.svg" alt="icon"/>
                                        <img src="images/icons/sofa.svg" alt="icon"/>
                                    </div>

                                    <div class="row container align-items-center property-details">


                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                        <div class="col-md">
                                            <ul>
                                                <li><i class="far fa-check-circle"></i>Amenity</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>



                        <div class="col-md checkout-property-info">

                            <div class="row text-right">
                                <div class="checkout-box col-xl">

                                    <div class="booking-information text-left">

                                        <div class="container align-items-center details-price">
                                            <div class="row container align-items-center details-price">
                                                <div class="col-md">
                                                    <h3>$89 <span>per night</span></h3>
                                                </div>
                                                <div class="col-md takealook-button">
                                                    <button type="button" class=" btn btn-outline-secondary"><i
                                                        class="fas fa-external-link-alt"></i> Share
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="row checkout-boxes">
                                                <div class='col-lg'>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white"><i
                                                class="fa fa-calendar"></i></span>
                                                        </div>
                                                        <input type="text" class="form-control border-left-0"
                                                               placeholder="Check In"
                                                               aria-label="checkin" aria-describedby="check in"/>

                                                    </div>

                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white"><i
                                                class="fa fa-calendar"></i></span>
                                                        </div>
                                                        <input type="text" class="form-control border-left-0"
                                                               placeholder="Check Out"
                                                               aria-label="checkout" aria-describedby="check out"/>

                                                    </div>
                                                </div>

                                                <div class='col-lg'>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white"><i
                                                                class="fa fa-user"></i></span>
                                                        </div>
                                                        <input type="text" class="form-control border-left-0"
                                                               placeholder="Adults"
                                                               aria-label="adults" aria-describedby="adults"/>
                                                    </div>

                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white"><i
                                                                class="fa fa-user"></i></span>
                                                        </div>
                                                        <input type="text" class="form-control border-left-0"
                                                               placeholder="Children"
                                                               aria-label="Children" aria-describedby="children"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row checkout-boxes align-items-start">
                                                <div class='col-sm'>
                                                    <ul>
                                                        <li><b>Total</b></li>
                                                        <li>Includes Taxes and Fees</li>
                                                    </ul>
                                                </div>
                                                <div class='col-sm text-right'>
                                                    <ul>
                                                        <li><b>$300</b></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="text-center booknow-mainbutton">
                                                <button type="button" class="btn btn-outline-primary">Book Now</button>
                                            </div>

                                            <div class="text-center checkout-contact">
                                                <p>For booking assistance please <u><a href="#">contact us</a></u></p>
                                            </div>

                                        </div>
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


export default PropertyDetail