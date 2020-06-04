import React from "react";


import imgBoston from "../../assets/images/locations-boston.jpg"
import imgBrookline from "../../assets/images/locations-brookline.jpg"
import imgCambridge from "../../assets/images/locations-cambridge.jpg"
import imgQuincy from "../../assets/images/locations-quincy.jpg"
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import {Col, Container, Row} from "react-bootstrap";

const locations = [{}]

class Locations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [
                {
                    title: '',
                    content: ''
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({locations: locations})
    }

    render() {
        // const { locations } = this.props

        return (
            <>
                <header>
                    <section className="container-fluid main-background">
                        <HeaderNavbar/>
                    </section>
                </header>

                <Container>
                    <h2 className="text-center">Our Locations</h2>
                    <Row>
                        <Col sm={6} md={3}>
                            <a href="#boston">
                                <button className="btn btn-outline-primary">
                                    Boston
                                </button>
                            </a>

                        </Col>
                        <Col sm={6} md={3} className="center-block">
                            <a href="#brookline">
                                <button className="btn btn-outline-primary">
                                    Brookline
                                </button>
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="#cambridge">
                                <button className="btn btn-outline-primary">
                                    Cambridge
                                </button>
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="#quincy">
                                <button className="btn btn-outline-primary">
                                    Quincy
                                </button>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <div className="container">
                    <div id="boston" className="row mb-5 location-card">

                        <div className="col-sm-6 image-box">
                            <img src={imgBoston} className="pull-left" alt="boston"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Boston</h3>
                            <p>
                                Boston is the epitome of the historical and the contemporary. Personal preferences for
                                entertainment and interests are virtually endless: from historical trails and artifacts
                                to fringe
                                theatre, from inspirational architecture to dining on local fare.<br/>

                                Dining options are dynamic and delicious. Contemporary cuisine, traditional New England
                                fare
                                with a few twists and an eclectic mix of international and ethnic dishes make for
                                exceptional
                                dining. New restaurants and old favorites cater to every palate and pocketbook.<br/>

                                Boston's public transportation is accessible and convenient. Pedicabs, taxis and bike
                                rentals
                                are also readily available.
                            </p>
                            <button className="btn btn-outline-primary">CHECK OUT BOSTON</button>
                        </div>
                    </div>
                    <div id="brookline" className="row mb-5 location-card">
                        <div className="col-sm-6">
                            <h3>Brookline</h3>
                            <p>
                                Brookline is home to two National Park Sites including the JFK Birthplace and the of
                                home of
                                Frederick Law Olmsted. The Larz Anderson Auto Museum houses America's oldest car
                                collection
                                and features a variety of educational programs, exhibits and events throughout the year.

                                Brookline is home to an eclectic mix of independent shops and boutiques, and also offers
                                a
                                variety of restaurants, cafes and bistros offering both unique and traditional flavors;
                                casual dining and gourmet meals.

                                Brookline's proximity to Boston, public transportation and major roadways means visitors
                                have easy access to the hustle of downtown and a place to step away from all the action
                                at
                                the end of the day.
                            </p>
                            <button className="btn btn-outline-primary">CHECK OUT BROOKLINE</button>

                        </div>
                        <div className="col-sm-6 image-box">
                            <img src={imgBrookline} className="pull-right"/>
                        </div>
                    </div>
                    <div id="cambridge" className="row mb-5 location-card">
                        <div className="col-sm-6 image-box">
                            <img src={imgCambridge} className="pull-left"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Cambridge</h3>
                            <p>
                                Whether you’re looking to indulge in an authentic meal, to pick up an antique bike, kick
                                back in a bookstore or sip a coffee in an outdoor café, Cambridge delivers. This New
                                England
                                town, home of the two most prestigious universities in the nation, is an eclectic mix of
                                cool shops, student hang outs and varied hip restaurants ready to please everyone's
                                palate.

                                If you want to travel, Stagecoach offers a network of frequent & reliable buses, these
                                provide excellent access to all parts of Cambridge, as well as cycle hire and car hire
                                shops
                                located in the heart of the city.
                            </p>
                            <button className="btn btn-outline-primary">CHECK OUT CAMBRIDGE</button>
                        </div>
                    </div>
                    <div id="quincy" className="row mb-5 location-card">
                        <div className="col-sm-6">
                            <h3>Quincy</h3>
                            <p>
                                Just minutes from downtown Boston via the MBTA, boat or car, the City of Quincy is truly
                                the
                                birthplace of our great American story: With twenty-seven miles of coastline and
                                beaches,
                                acres of beautiful protected parks, the most interesting and diverse dining scene
                                outside of
                                Boston, rock climbing and hiking at the Blue Hills Reservation, world-class golf courses
                                and
                                so much more.

                                Only seven miles from Boston’s Logan International Airport, Quincy is easily accessible
                                by
                                highway. It also has an excellent public transportation service with four MBTA Red Line
                                subway stops and numerous bus routes.
                            </p>
                            <button className="btn btn-outline-primary">CHECK OUT QUINCY</button>

                        </div>
                        <div className="col-sm-6 image-box">
                            <img src={imgQuincy} className="pull-right"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Locations