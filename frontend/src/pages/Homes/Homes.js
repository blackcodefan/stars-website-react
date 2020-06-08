import React from "react";

import SearchBox from "../../components/layout/SearchBox";
import SolutionView from "../../components/sections/SolutionView";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import GuestReviewsView from "../../components/sections/GuestReviewsView";
import SubscribeView from "../../components/sections/SubscribeView";
import {propertyAction} from "../../redux/actions";
import {connect} from "react-redux";
import {locationAction} from "../../redux/actions/location.actions";
import PropertyCard from "../../components/sections/PropertyCard";
import imgStayinboston from "../../assets/images/stayinboston.jpg";
import {Image} from "react-bootstrap";
import icon1 from "../../assets/images/icons/icons_1.svg";
import icon2 from "../../assets/images/icons/icons_2.svg";
import icon3 from "../../assets/images/icons/icons_3.svg";
import icon4 from "../../assets/images/icons/icons_4.svg";
import icon5 from "../../assets/images/icons/icons_5.svg";
import icon6 from "../../assets/images/icons/icons_6.svg";
import icon7 from "../../assets/images/icons/icons_7.svg";
import icon8 from "../../assets/images/icons/icons_8.svg";
import icon9 from "../../assets/images/icons/icons_9.svg";
import icon10 from "../../assets/images/icons/icons_10.svg";
import doctor from "../../assets/images/doctor.jpg";
import corporateHousing from "../../assets/images/corporatehousing.jpg";
import Footer from "../../components/layout/Footer";


class Homes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: [],
            solutions: [],
            locations: [],
        }
    }

    componentDidMount() {
        this.props.getFilteredProperties({category: 'private'})
        this.props.getAllLocations()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            properties: nextProps.properties,
            locations: nextProps.locations
        })
        console.log("componentWillReceiveProps", nextProps)
    }

    render() {
        const {locations, properties} = this.state

        return (
            <>
                <header>
                    <section className="container-fluid main-background">
                        <HeaderNavbar/>
                        <SearchBox/>
                    </section>
                </header>
                <SolutionView/>
                <section className="container-fluid text-center stars-background">
                    <div className="container">
                        <h2>The STARS Experience</h2>
                        <div className="row align-items-start">
                            <div className="stars-item col-sm-6 col-md-4">
                                <Image className="stars-icon" src={icon1} alt="icon"/>
                                <h4>Feel at home in Boston</h4>
                                <p>Beautifully furnished rentals with the amenities and comforts of home</p>
                            </div>
                            <div className="stars-item col-sm-6 col-md-4">
                                <Image className="stars-icon" src={icon2} alt="icon"/>
                                <h4>The right fit</h4>
                                <p>Medical travel, travel nurses, corporate housing, or university visits, we have the
                                    right
                                    rental for
                                    you</p>
                            </div>
                            <div className="stars-item col-sm-6 col-md-4">
                                <Image className="stars-icon" src={icon3} alt="icon"/>
                                <h4>Short or Long Stays</h4>
                                <p>Available daily, weekly, or monthly</p>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="stars-item col-sm-6 col-md-4">
                                <Image className="stars-icon" src={icon4} alt="icon"/>
                                <h4>Personalized service</h4>
                                <p>Friendly, responsive customer service works to ensure all your needs are met</p>
                            </div>
                            <div className="stars-item col-sm-6 col-md-4">
                                <Image className="stars-icon" src={icon5} alt="icon"/>
                                <h4>In-demand locations</h4>
                                <p>Minutes from public transportation, with easy access to shopping, dining, hospitals,
                                    universities,
                                    and tourist attractions</p>
                            </div>
                            <div className="stars-item col-sm-6 col-md-4">
                                <Image className="stars-icon" src={icon6} alt="icon"/>
                                <h4>Leave it to a Local</h4>
                                <p>From city attractions to local haunts, rely on our insider knowledge for the best
                                    Boston
                                    experience</p>
                            </div>
                        </div>
                        <div className="container vip-services">
                            <h3>VIP Services</h3>
                            <div className="row">
                                <div className="stars-item vip-item col-sm">
                                    <div className="row">
                                        <div className="col-lg">
                                            <Image className="stars-icon" src={icon7} alt="icon"/>
                                        </div>
                                        <div className="col-lg">
                                            <h4>Car Service</h4>
                                            <p>Navigate Boston without the hassle! Offering airport transfer service and
                                                personal
                                                drivers</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="stars-item vip-item col-sm">
                                    <div className="row">
                                        <div className="col-lg">
                                            <Image className="stars-icon" src={icon8} alt="icon"/>
                                        </div>
                                        <div className="col-lg">
                                            <h4>Child care</h4>
                                            <p>Pack-and-play rentals and dependable babysitting services to ensure the
                                                whole
                                                family’s
                                                needs are met</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="stars-item vip-item col-sm">
                                    <div className="row">
                                        <div className="col-lg">
                                            <Image className="stars-icon" src={icon9} alt="icon"/>
                                        </div>
                                        <div className="col-lg">
                                            <h4>Pet service</h4>
                                            <p>Bring your furry friends along! Reliable care for your pets while you’re
                                                busy</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="stars-item vip-item col-sm">
                                    <div className="row">
                                        <div className="col-lg">
                                            <Image className="stars-icon" src={icon10} alt="icon"/>
                                        </div>
                                        <div className="col-lg">
                                            <h4>Spa service</h4>
                                            <p>Ready to let off some steam? Bring in-house spa services to your
                                                rental</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid grey-background">
                    <div className="row container stay-simplified">
                        <div className="col-sm">
                            <h2>Your Stay in Boston Simplified</h2>
                            <div className="row align-items-start">
                                <div className="col-md stay-list">
                                    <ul>
                                        <li><i className="fa fa-star"/> Complimentary Wi-Fi</li>
                                        <li><i className="fa fa-star"/> Coffee Maker + Coffee</li>
                                        <li><i className="fa fa-star"/> Hair Dryer</li>
                                        <li><i className="fa fa-star"/> Heat + Air Conditioning</li>
                                        <li><i className="fa fa-star"/> Quiet and Professional Building</li>
                                        <li><i className="fa fa-star"/> Fully Equipped Kitchens</li>
                                        <li><i className="fa fa-star"/> Tableware + Utensils</li>
                                    </ul>
                                </div>

                                <div className="col-md stay-list">
                                    <ul>
                                        <li><i className="fa fa-star"/> Desk or Work Space</li>
                                        <li><i className="fa fa-star"/> Express Check-In + Check-Out</li>
                                        <li><i className="fa fa-star"/> MBTA Access</li>
                                        <li><i className="fa fa-star"/> Iron + Ironing Board</li>
                                        <li><i className="fa fa-star"/> Welcome Gift Basket</li>
                                        <li><i className="fa fa-star"/> Linens + Towels</li>
                                        <li><i className="fa fa-star"/> Curated Local Information</li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="btn btn-outline-primary">More About Us</button>
                        </div>
                        <div className="image-box col-sm">
                            <img src={imgStayinboston}/>
                        </div>
                    </div>
                </section>
                <section className="container-fluid">
                    <h2 className="text-center">Explore Our Locations </h2>
                    <div className="row container">
                        {
                            locations && locations.map((location, index) => {
                                    const imgUrl = require(`../../assets/images/${location.imgName}`)

                                    return (
                                        <div className="col-md-6 col-lg-3">
                                            <div className="location">
                                                <img src={imgUrl} alt={location.title}/>
                                                <div className="location-title"><h3>{location.title}</h3></div>
                                            </div>
                                        </div>
                                    )

                                }
                            )
                        }
                    </div>
                </section>
                <section className="container-fluid blue-background medical-travel">
                    <h2 className="text-center">Medical Travel</h2>
                    <div className="row container">
                        <div className="image-box col-md">
                            <img src={doctor} alt="doctor"/>
                        </div>
                        <div className="col-md">
                            <p>Many of our rentals are close to the Longwood Medical Area or the ‘medical mecca’. We
                                provide
                                a
                                quick and
                                easy access to some of the most world-renowned hospitals, specialists and teaching
                                facilities
                                like the
                                Dana Farber Cancer Institute, Boston Children’s Hospital or Mass General.</p>
                            <p>
                                Whether your stay is short term or extended; we host traveling nurses, patient families
                                and
                                medical
                                professionals, in clean, fully furnished, well-appointed units in some of the best
                                locations
                                throughout
                                the city, offering the perfect hotel alternative.</p>
                            <button type="button" className="btn btn-outline-light">Explore our apartments</button>
                        </div>
                    </div>
                </section>
                <section className="container-fluid corporate-housing">
                    <div className="row container">
                        <div className="col-md">
                            <h2>Corporate Housing</h2>
                            <p>Our fully-furnished corporate housing is perfect for business travellers. It provides the
                                perfect
                                workspace for productivity, with wi-fi and self check-in.</p>
                            <p>
                                Apart from saving time, you will also save money. Have all the amenities from hotels, at
                                a
                                fraction of
                                the cost.</p>
                            <button type="button" className="btn btn-outline-primary">Read More</button>
                        </div>
                        <div className="image-box col-md">
                            <img src={corporateHousing} alt="corporate"/>
                        </div>
                    </div>
                </section>
                <section className="container-fluid grey-background">
                    <div className="row container">
                        <div className="col-sm">
                            <p>FIND YOUR IDEAL STAY</p>
                            <h2>Take a look at our rentals</h2>
                        </div>
                        <div className="col-sm">
                            <button type="button" className="btn btn-outline-primary pull-right">Read More</button>
                        </div>
                    </div>
                    <div className="row container">

                        {
                            properties && properties.map((property, index) => (
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
                            ))
                        }
                    </div>
                </section>
                <GuestReviewsView/>
                <SubscribeView/>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps", state)
    const {property, location} = state;
    return {
        properties: property.items,
        locations: location.items
    }
}

const mapDispatchToProps = dispatch => ({
    getFilteredProperties: (term) => dispatch(propertyAction.getFilteredProperties(term)),
    getAllLocations: () => dispatch(locationAction.getAllLocations())
})


export default connect(mapStateToProps, mapDispatchToProps)(Homes);
