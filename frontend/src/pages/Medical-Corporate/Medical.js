import React from "react";


import medical from "../../assets/images/medical.jpg"
import corporate from "../../assets/images/corporate.jpg"
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import {Col, Container, Image, Row} from "react-bootstrap";
import icon1 from "../../assets/images/icons/icons_1.svg";
import icon2 from "../../assets/images/icons/icons_2.svg";
import icon3 from "../../assets/images/icons/icons_3.svg";
import hospital from "../../assets/images/icons/icon_hospital.png"
import kit from "../../assets/images/icons/icon_kit.png"
import agreement from "../../assets/images/icons/icon_hand.png"


class Medical extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <header>
                    <section className="container-fluid main-background">
                        <HeaderNavbar/>
                    </section>
                </header>

                <div className="container">
                    <div id="brookline" className="row  mb-5">
                        <div className="col-sm-6">
                            <h2>Medical Stays</h2>
                            <p>
                                Patients and medical professionals travel around the globe to Boston’s medical areas.
                                Our
                                apartments are in close proximity to the services you need and easily available by
                                public
                                transit or private car.
                            </p>
                            <p>

                                Our medical patients and their families appreciate the special care we take providing
                                comfortable, compassionate care. We offer restful spaces for meals and playing with your
                                kids for some tiny normalcy at a chaotic time.
                            </p>
                            <p>
                                Healthcare providers and travel nurses rely on our experience with your long hours and
                                on-call location restrictions. We keep everything simple so you can spend your precious
                                time
                                off being off!
                            </p>
                            <button className="btn btn-block btn-outline-primary">EXPLORE OUR MEDICAL ACCOMMODATIONS
                            </button>

                        </div>
                        <div className="col-sm-6">
                            <img src={medical} className="locations-img"/>
                        </div>
                    </div>
                    <h2>Next Level Medical Stays</h2>
                    <div className="row align-items-start">
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={hospital} alt="icon"/>
                            <h4>Access to Hospitals</h4>
                            <p>Your services are all close by public transit or private car</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={kit} alt="icon"/>
                            <h4>VISiTING HEALTHCARE</h4>
                            <p>Receive quality nursing, health aide and personal care assistance in the comfort of your
                                rental*</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <img className="stars-icon" src={agreement} alt="icon"/>
                            <h4>PERSONAL ASSISTANCE</h4>
                            <p>We can provide services for groceries, prescriptions or personal errands during your
                                stay.</p>
                        </div>
                    </div>
                </div>
                <section className="container-fluid grey-background">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-sm-8"><h2>Explore Our Medical Accommodations</h2>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-block btn-outline-primary">BROWSE RENTALS</button>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-sm-4">
                                <button className="btn btn-block btn-outline-primary explore">Turfts<br/> Medical Area
                                </button>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-block btn-outline-primary explore">St.Elezabeth's<br/> Medical
                                    Area
                                </button>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-block btn-outline-primary explore">LongWood<br/> Medical Area
                                </button>
                            </div>
                        </div>
                        <div className="row map">
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div id="brookline" className="row  mb-5">
                        <div className="col-sm-6">
                            <img src={corporate} className="locations-img"/>
                        </div>
                        <div className="col-sm-6">
                            <h2>Corporate Travel</h2>
                            <p>
                                Life’s too short to just stay! Even when you’re travelling for business, we want you to
                                live a little! Stay as long as you need, from days to months. Our responsive guest
                                services will be at your fingertips 24/7.

                            </p>
                            <p>
                                Our stylishly furnished units around Greater Boston are designed with your working
                                comfort in mind. You can rely on dedicated laptop-friendly workspaces, complimentary
                                Wi-Fi and fully accessorized kitchens. We believe productivity and comfort are not
                                mutually exclusive!
                            </p>
                            <button className="btn btn-block btn-outline-primary">EXPLORE OUR CORPORATE ACCOMMODATIONS
                            </button>
                        </div>

                    </div>
                    <h2>Congenial Business Accommodations</h2>
                    <div className="row align-items-start">
                        <div className="stars-item col-sm-6 col-md-4">
                            <img className="stars-icon" src={icon1} alt="icon"/>
                            <h4>DEDICATED WORKSPACES</h4>
                            <p>We offer laptop-friendly work areas and complimentary wi-fi for a productive stay.</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <img className="stars-icon" src={icon2} alt="icon"/>
                            <h4>Flexible, Hasslefree Stays</h4>
                            <p>We adapt to you. Our self check-in opens doors any time and we welcome your stay as long
                                as you need.</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <img className="stars-icon" src={icon3} alt="icon"/>
                            <h4>Exceptional Guest Service 24/7</h4>
                            <p>We provide the information you need with insider tips for a productive day or a fun
                                evening out.</p>
                        </div>
                    </div>

                </div>
            </>


        )
    }
}


export default Medical