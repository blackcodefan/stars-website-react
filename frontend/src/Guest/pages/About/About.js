import React from "react";

import HeaderNavbar from "../../components/layout/HeaderNavbar";
import imgBoston from "../../../assets/images/locations-boston.jpg";
import Footer from "../../components/layout/Footer";
import ContactForm from "../../components/sections/ContactForm";
import SubscribeView from "../../components/sections/SubscribeView";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
library.add(faInstagram, faTwitter, faFacebookSquare);


class About extends React.Component {
    state = {
        avatars: [
            'avatar1.jpg',
            'avatar2.jpg',
            'avatar3.jpg',
            'avatar4.jpg',
        ]
    }

    render() {
        return (
            <header>
                <section className="container-fluid main-background-2">
                    <HeaderNavbar/>
                </section>
                <div className="container mt-lg-5 mb-lg-5 main-content">
                    <div id="boston" className="row mb-5">
                        <div className="col-sm-6">
                            <h2>Our Mission</h2>
                            <p>
                                At Stars of Boston, we aim to provide the greatest fully furnished, well-equipped
                                properties with comfortable furniture and modern amenities in Greater Boston.
                            </p>
                            <p>
                                For extended stays or short-term visits, choose from a wide variety of rentals to fit
                                your needs; including studio, one to three bedroom apartments as well as private rooms
                                and full homes. We cater to small or large groups, business travellers, medical
                                professionals, travelling nurses or anyone wanting to enjoy a pleasant stay in our
                                beautiful city.
                            </p>
                            <p>
                                As a recognized leader in the industry, we offer the perfect hotel alternative.
                            </p>
                            <button className="btn btn-outline-primary">CHECK OUT BOSTON</button>
                        </div>

                        <div className="col-sm-6 image-box">
                            <img src={imgBoston} className="image-box"/>
                        </div>
                    </div>
                </div>
                <section className="container-fluid grey-background">
                    <div className="row container">
                        <h2>Our Team</h2>
                        <p>Hello! We are small local team with diverse backgrounds, and lifetime residents of this
                            amazing city so we have inside information and suggestions for your planned visit, short or
                            long. Meet also the latest addition to our team, Cisco the bike rider, and follow his
                            personal Instagram page</p>
                        {
                            this.state.avatars && this.state.avatars.map((avatar, index) => {
                                return (
                                    <div key={index} className="col-sm-3">
                                        <img className="team-avatar" src={require(`../../../assets/images/avatars/${avatar}`)} alt={avatar}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <div className="container mt-lg-5 mb-lg-5 main-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Contact us</h2>
                            <p>We are available to answer questions and provide suggestions or connect you with some of
                                our additional personalized services. Please contact us using the form or the contact
                                details below:</p>
                            <p>(617)-855-9576 </p>
                            <p>info@starsofboston.com </p>
                            <p>1583 Beacon Street<br/>
                                Brookline, MA 02446<br/>
                                USA
                            </p>
                            <div className="social-icons-contact">
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <SubscribeView/>
                <Footer/>
            </header>
        )
    }


}

export default About