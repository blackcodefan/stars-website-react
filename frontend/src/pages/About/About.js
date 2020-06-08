import React from "react";

import HeaderNavbar from "../../components/layout/HeaderNavbar";
import imgBoston from "../../assets/images/locations-boston.jpg";
import Footer from "../../components/layout/Footer";


class About extends React.Component {
    render() {
        return (
            <header>
                <section className="container-fluid main-background">
                    <HeaderNavbar/>
                </section>
                <div className="container">
                    <div id="boston" className="row mb-5">

                        <div className="col-sm-6">
                            <h3>Our Mission</h3>
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
                <Footer/>
            </header>
        )
    }


}

export default About