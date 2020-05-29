import React from "react";
import logo from '../../assets/images/logo-horizontal.png'


class FooterView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <footer className="container-fluid grey-background">
                <div className="row align-items-start container">
                    <div className="col-xl-3">
                        <img src={logo} className="site-logo" alt="bottom-logo"/>
                        <p>Your short-term apartment rental solution in greater Boston.</p>
                    </div>

                    <div className="col-xl-3">
                        <h5>Quick Links</h5>
                        <div className="row align-items-start">
                            <div className="col-xl-5">
                                <ul>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="aboutus.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="medicaltravel.html">Medical Travel</a>
                                    </li>
                                    <li>
                                        <a href="businesstravel.html">Business Travel</a>
                                    </li>
                                    <li>
                                        <a href="faqs.html">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl">
                                <ul>
                                    <li>
                                        <a href="contactus.html">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="termsandconditions.html">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="privacypolicy.html">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="refundpolicy.html">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl">
                        <h5>Locations</h5>
                        <ul>
                            <li>
                                <a href="brookline.html">Brookline</a>
                            </li>
                            <li>
                                <a href="boston.html">Boston</a>
                            </li>
                            <li>
                                <a href="cambridge.html">Cambridge</a>
                            </li>
                            <li>
                                <a href="quincy.html">Quincy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl">
                        <h5>Explore</h5>
                        <ul>
                            <li>
                                <a href="sports.html">Sports</a>
                            </li>
                            <li>
                                <a href="historicalsites.html">Historical Sites</a>
                            </li>
                            <li>
                                <a href="events.html">Events</a>
                            </li>
                            <li>
                                <a href="museums.html">Museums</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl">
                        <h5>Get in touch</h5>
                        <p className="social-icons">
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-facebook-f"></i></a>
                        </p>

                        <p>
                            <a href="tel:6178559576">(617)-855-9576</a>
                            <br/>
                            <a href="mailto:info@starsofboston.com">info@starsofboston.com</a>
                        </p>

                        <p>
                            1583 Beacon Street<br/>
                            Brookline, MA 02446<br/>
                            USA
                        </p>
                    </div>

                </div>
                <div className="container">
                    <h6 className="text-left">© 2019 Stars of Boston LLC. All rights reserved.</h6>
                </div>
            </footer>
        )
    }
}

export default FooterView;