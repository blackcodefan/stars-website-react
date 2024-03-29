import React from "react";
import logo from '../../../assets/images/logo-horizontal.png'
import {Link} from "react-router-dom";


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <footer className="container-fluid grey-background">
                <div className="row align-items-start container">
                    <div className="col-md-3 col-xs-6">
                        <img src={logo} className="site-logo" alt="bottom-logo"/>
                        <p>Your short-term apartment rental solution in greater Boston.</p>
                    </div>

                    <div className="col-md-3 col-xs-6">
                        <h5>Quick Links</h5>
                        <div className="row align-items-start">
                            <div className="col-md">
                                <ul>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/medical">Medical Travel</Link>
                                    </li>
                                    <li>
                                        <Link to="/medical">Business Travel</Link>
                                    </li>
                                    <li>
                                        <Link to="">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <ul>
                                    <li>
                                        <Link to="/contact">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/cancellation-policy">Refund Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md col-xs-6">
                        <h5>Locations</h5>
                        <ul>
                            <li>
                                <a href="">Brookline</a>
                            </li>
                            <li>
                                <a href="">Boston</a>
                            </li>
                            <li>
                                <a href="">Cambridge</a>
                            </li>
                            <li>
                                <a href="">Quincy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md col-xs-6">
                        <h5>Explore</h5>
                        <ul>
                            <li>
                                <a href="">Sports</a>
                            </li>
                            <li>
                                <a href="">Historical Sites</a>
                            </li>
                            <li>
                                <a href="">Events</a>
                            </li>
                            <li>
                                <a href="">Museums</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md col-xs-6">
                        <h5>Get in touch</h5>
                        <p className="social-icons">
                            <a href="#"><i className="fa fa-instagram"/></a>
                            <a href="#"><i className="fa fa-twitter"/></a>
                            <a href="#"><i className="fa fa-facebook-f"/></a>
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
                    <h6 className="text-left">© 2019-2020 Stars of Boston LLC. All rights reserved.</h6>
                </div>
            </footer>
        )
    }
}

export default Footer;