import React from "react";

import HeaderNavbar from "../../components/layout/HeaderNavbar";
import imgBoston from "../../../assets/images/locations-boston.jpg";
import Footer from "../../components/layout/Footer";
import ContactForm from "../../components/sections/ContactForm";
import SubscribeView from "../../components/sections/SubscribeView";


class About extends React.Component {
    render() {
        return (
            <header>
                <section className="container-fluid main-background">
                    <HeaderNavbar/>
                </section>
                <div className="container mt-lg-5 mb-lg-5 main-text">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Contact us</h2>
                            <p>We are available to answer questions and provide suggestions or connect you with some of
                                our additional personalized services. Please contact us using the form or the contact
                                details below:</p>
                            <p style={{fontWeight: `bold`}}>(617)-855-9576 </p>
                            <p>info@starsofboston.com </p>
                            <p>1583 Beacon Street<br/>
                                Brookline, MA 02446<br/>
                                USA
                            </p>
                            <div className="social-icons-contact">
                                <i className="fa fa-instagram"/>
                                <i className="fa fa-twitter"/>
                                <i className="fa fa-facebook"/>
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