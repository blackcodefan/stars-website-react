import React from "react";
import {history} from "../../_helper/history"

import HeaderNavbar from "../../components/layout/HeaderNavbar";
import DatePickerInput from "../../components/elements/DatePickerInput";
import DatePicker from "react-datepicker";

import imgBedKing from "../../assets/images/icons/bed-king.svg"
import imgBedQueen from "../../assets/images/icons/bed-queen.svg"
import imgSofa from "../../assets/images/icons/sofa.svg"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core"
import {faDoorOpen, faUserFriends, faParking, faBath, faCouch, faPaw} from "@fortawesome/free-solid-svg-icons"

import {connect} from "react-redux";
import {currentPropertyAction} from "../../redux/actions/currentProperty.actions";
import {Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropertyCard from "../../components/sections/PropertyCard";
import SimpleMap from "../../components/elements/SimpleMap";


library.add(faDoorOpen, faUserFriends, faParking, faBath, faCouch, faPaw)



class PropertyDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            currentProperty: {
                id: this.props.match.params.id,
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
                neighborhoods: {
                    restaurants: [],
                    stores: []
                },
                similarAccommodations: [],
            },
            booking: {
                checkInDate: '',
                checkOutDate: '',
                adultsCount: '',
                childrenCount: '',
            }
        }
        console.log("this.props.match")
        console.log(this.props.match)
    }

    componentDidMount() {
        this.setState({isLoading: true})
        this.props.getPropertyDetail(this.state.currentProperty.id)
        this.setState({isLoading: false})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({currentProperty: nextProps.currentProperty})
    }

    handleCheckInChange = (value, formattedValue) => {
        let booking = {...this.state.booking}
        booking.checkInDate = value;
        this.setState({booking})
        if (this.state.booking.checkInDate < this.state.booking.checkOutDate) {
            console.log("reset  checkout date")
            booking.checkOutDate = ''
            this.setState({booking})
        }
    }

    handleCheckOutChange = (value, formattedValue) => {
        let booking = {...this.state.booking}
        booking.checkOutDate = value;
        this.setState({booking})
    }

    handleAdultsCountChange = (e) => {
        if (this.validateNumber(e.target.value)) {
            let booking = {...this.state.booking}
            booking.adultsCount = e.target.value;
            this.setState({booking})
        }
    }

    handleChildrenCountChange = (e) => {
        if (this.validateNumber(e.target.value)) {
            let booking = {...this.state.booking}
            booking.childrenCount = e.target.value;
            this.setState({booking})
        }
    }

    validateNumber = (value) => {
        const reg = /^[0-9\b]+$/;
        if (value === '' || reg.test(value)) {
            return true
        }
    }

    handleBookClick = () => {
        console.log(this.state)
        if (this.state.booking.checkInDate === '' || this.state.booking.checkOutDate === '') {
            alert('please insert date')
            return false
        }
        if (this.state.booking.adultsCount === '' && this.state.booking.childrenCount === '') {
            alert('please insert number of people')
            return false
        }
        history.push("/checkout")
    }

    render() {
        const {currentProperty, booking} = this.state

        if (this.state.isLoading) {
            return (<Spinner animation="border"/>)
        }

        if (currentProperty === null) {
            return
        }

        return (
            <>
                <header>
                    <section className="container-fluid main-background-property">
                        <HeaderNavbar/>
                        <div className="container property-details-title">
                            <div className="row">
                                <div className="col-sm">
                                    <h1>{currentProperty.title}</h1>
                                    <p>{currentProperty.address}</p>
                                </div>
                                <div className="property-details-buttons col-sm text-right align-self-end">
                                    <button type="button" className="btn btn-outline-primary button-icon360 mr-lg-5">
                                        <i className="icon360-2"/>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                            history.push("/property")
                                        }}>
                                        View All Photos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>

                <section className="container-fluid mt-lg-5">
                    <div className="row container align-items start align-items-start">
                        <div className="col-xl-7 checkout-booking-info">
                            <div className="row align-items-center">
                                <div className="col-sm">
                                    <div className="details-icons">
                                        <span>
                                            <FontAwesomeIcon icon="couch"/>
                                            {
                                                currentProperty.furnished && "Furnished"
                                            }
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon="user-friends"/>
                                             Sleeps {currentProperty.countSleep}
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon="door-open"/>
                                            {currentProperty.countBed} Bedroom
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon="bath"/>
                                            {currentProperty.countBath} Bathroom
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon="parking"/>
                                            {currentProperty.rentalParking && "Rental Parking"}
                                        </span>
                                    </div>

                                    <ul className="nav nav-tabs details-buttons">
                                        <li className="active"><a href="#overview" type="button" data-toggle="tab"
                                                                  className="btn btn-outline-primary active">Overview</a>
                                        </li>
                                        <li><a href="#amenity" type="button" data-toggle="tab"
                                               className="btn btn-outline-primary">Amenities</a></li>
                                        <li><a href="#location" type="button" data-toggle="tab"
                                               className="btn btn-outline-primary">Location</a></li>
                                        <li><a href="#neighborhood" type="button" data-toggle="tab"
                                               className="btn btn-outline-primary">Neighborhood</a></li>
                                        <li><a href="#transit" type="button" data-toggle="tab"
                                               className="btn btn-outline-primary">Transit</a></li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="overview" className="tab-pane fade in active show">
                                            <p>{currentProperty.overview}</p>
                                        </div>
                                        <div id="amenity" className="tab-pane fade">
                                            <h3>Amenities</h3>
                                            <h5>General</h5>
                                            <div className="row container align-items-center property-details">
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h5>Bathrooms</h5>
                                            <div className="row container align-items-center property-details">
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md">
                                                    <ul>
                                                        <li><i className="far fa-check-circle"/>Amenity</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="icons-bedroom-details">
                                                <img src={imgBedKing} alt="icon"/>
                                                <img src={imgBedQueen} alt="icon"/>
                                                <img src={imgBedQueen} alt="icon"/>
                                                <img src={imgSofa} alt="icon"/>
                                            </div>
                                            <h5>Bedrooms</h5>
                                        </div>

                                        <div id="location" className="tab-pane fade">
                                            <h3>Location</h3>
                                            <SimpleMap/>
                                        </div>

                                        <div id="neighborhood" className="tab-pane fade">
                                            <p>
                                                <strong>BROOKLINE | ST MARY’S | COOLIDGE CORNER</strong><br/>
                                                Walk to Coolidge Corner or Fenway and Kenmore&nbsp;and enjoy the
                                                convenience of&nbsp;<a
                                                href="https://www.wholefoodsmarket.com/stores/brookline?YYtxLB">Whole
                                                Foods</a>,&nbsp;<a
                                                href="https://www.regmovies.com/theaters/regal-fenway-stadium-13-rpx/C00168531252">Regal
                                                Fenway Cinema</a>&nbsp;at the historical<a
                                                href="https://samuelsre.com/property/landmark">&nbsp;Landmark
                                                Center</a>&nbsp;as well as many great restaurants, bakeries and
                                                shops at
                                                your doorstep.</p>
                                            <p><strong>RESTAURANTS</strong><br/>
                                                Busy Bee Diner<br/>
                                                Taberna de Haro<br/>
                                                Sol Azteca<br/>
                                                Dunkin Donuts<br/>
                                                Tatte Bakery<br/>
                                                Japonaise Bakery</p>
                                            <p><strong>STORES</strong><br/>
                                                <a href="https://stores.truevalue.com/ma/brookline/18681/">True
                                                    Value
                                                    Hardware</a><br/>
                                                <a href="http://wholefoodsmarket.com/">Whole Foods</a><br/>
                                                <a href="http://star%20market/">Star Market</a></p>
                                        </div>

                                        <div id="transit" className="tab-pane fade">
                                            <p className="text-left">Green Line C Train across from the building
                                                Nearest T stop: St. Mary’s</p>
                                            <p><a href="https://mbta.com/schedules/Green">Green Line details at MBTA
                                                official website</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md checkout-property-info">
                            <div className="row text-right">
                                <div className="checkout-box col-xl">
                                    <div className="booking-information text-left">
                                        <div className="container align-items-center check-form">
                                            <div className="row container align-items-center check-form">
                                                <div className="col-md">
                                                    <h3>{currentProperty.price} $ <span>per night</span></h3>
                                                </div>
                                                <div className="col-md takealook-button">
                                                    <button type="button" className=" btn btn-outline-secondary"><i
                                                        className="fas fa-external-link-alt"/> Share
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="row checkout-boxes">
                                                <div className='col-xs-6 col-sm-6 col-lg-6'>
                                                    <DatePicker
                                                        selected={this.state.booking.checkInDate}
                                                        value={this.state.booking.checkInDate}
                                                        minDate={new Date()}
                                                        className="form-control border-left-0"
                                                        dateFormat="MM/dd/yyyy"
                                                        placeholderText="CheckIn"
                                                        customInput={<DatePickerInput/>}
                                                        onChange={this.handleCheckInChange}/>
                                                </div>
                                                <div className='col-xs-6 col-sm-6 col-lg-6'>
                                                    <DatePicker
                                                        selected={this.state.booking.checkOutDate}
                                                        value={this.state.booking.checkOutDate}
                                                        minDate={this.state.booking.checkInDate === '' ? new Date() : this.state.booking.checkInDate}
                                                        className="form-control border-left-0"
                                                        dateFormat="MM/dd/yyyy"
                                                        placeholderText="CheckOut"
                                                        customInput={<DatePickerInput/>}
                                                        onChange={this.handleCheckOutChange}/>
                                                </div>
                                            </div>
                                            <div className="row checkout-boxes">
                                                <div className='col-xs-6 col-sm-6 col-lg-6'>
                                                    <div className="input-group mb-3  center-block">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-white"><i
                                                                className="fa fa-user"/></span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control border-left-0"
                                                            placeholder="Adults"
                                                            value={this.state.booking.adultsCount}
                                                            onChange={this.handleAdultsCountChange}
                                                            aria-label="adults"
                                                            aria-describedby="adults"/>
                                                    </div>
                                                </div>

                                                <div className='col-xs-6 col-sm-6 col-lg-6'>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-white"><i
                                                                className="fa fa-user"/></span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control border-left-0"
                                                            placeholder="Children"
                                                            value={this.state.booking.childrenCount}
                                                            onChange={this.handleChildrenCountChange}
                                                            aria-label="Children"
                                                            aria-describedby="children"/>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row checkout-boxes align-items-start">
                                                <div className='col-sm'>
                                                    <ul>
                                                        <li><b>Total</b></li>
                                                        <li>Includes Taxes and Fees</li>
                                                    </ul>
                                                </div>
                                                <div className='col-sm text-right'>
                                                    <ul>
                                                        <li><b>$300</b></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center booknow-mainbutton">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary"
                                                    onClick={this.handleBookClick}>Book Now
                                                </button>
                                            </div>
                                            <div className="text-center checkout-contact">
                                                <p>For booking assistance please <u><Link to="/Contact">contact
                                                    us</Link></u>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row container">
                        {
                            currentProperty.similarAccommodations.map((property, index) => (
                                    <PropertyCard
                                        key={index}
                                        id={property.id}
                                        address={property.address}
                                        title={property.title}
                                        price={property.price}
                                        countBed={property.countBed}
                                        countSleep={property.countSleep}
                                        countBath={property.countBath}
                                        rentalParking={property.rentalParking}
                                        furnished={property.furnished}
                                        petsConsidered={property.petsConsidered}
                                        bgImgLink={property.bgImgLink}/>
                                )
                            )
                        }
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = state => {
    const {currentProperty} = state;
    return {
        currentProperty
    }
}

const mapDispatchToProps = dispatch => ({
    getPropertyDetail: (id) => dispatch(currentPropertyAction.getPropertyDetail(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetail)