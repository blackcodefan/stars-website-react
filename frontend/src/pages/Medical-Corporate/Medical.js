import React from "react";


import medical from "../../assets/images/medical.jpg"
import corporate from "../../assets/images/corporate.jpg"
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import icon1 from "../../assets/images/icons/icons_1.svg";
import icon2 from "../../assets/images/icons/icons_2.svg";
import icon3 from "../../assets/images/icons/icons_3.svg";
import icons_hospital from '../../assets/images/icons/icons_hospital.svg'
import icons_agreement from '../../assets/images/icons/icons_agreement.svg'
import hospital from "../../assets/images/icons/icon_hospital.png"
import kit from "../../assets/images/icons/icon_kit.png"
import agreement from "../../assets/images/icons/icon_hand.png"
import Hospital from "../../components/Icons/Hospital";


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
                    <div id="brookline" className="row mb-lg-5 mt-lg-5 location-card">
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
                            <button className="btn btn-outline-primary">EXPLORE OUR MEDICAL ACCOMMODATIONS
                            </button>

                        </div>
                        <div className="col-sm-6 image-box">
                            <img src={medical} className="pull-right"/>
                        </div>
                    </div>
                    <h2>Next Level Medical Stays</h2>
                    <div className="row align-items-start">
                        <div className="stars-item col-sm-6 col-md-4">
                            <Hospital/>
                            <sapn class="icon">
                                {/*<svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*<g id="hospital-service-infirmary-sanatorium-sanitarium">*/}
                                        {/*<path d="m21 30h22v2h-22z"/>*/}
                                        {/*<path*/}
                                            {/*d="m24 10a8.258 8.258 0 0 1 .07-1h-10.07v2h10.07a8.258 8.258 0 0 1 -.07-1z"/>*/}
                                        {/*<path d="m42 54v-16h-9v16zm-7-9h2v2h-2z"/>*/}
                                        {/*<path d="m31 54v-16h-9v16zm-4-9h2v2h-2z"/>*/}
                                        {/*<path*/}
                                            {/*d="m16 54h4v-17a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v17h4v-41h-8.59a7.991 7.991 0 0 1 -14.82 0h-8.59zm3-33a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-24a1 1 0 0 1 -1-1zm0 8a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-24a1 1 0 0 1 -1-1z"/>*/}
                                        {/*<path*/}
                                            {/*d="m56.9 56.17 1.1.94v-30.11h-8v27h1.04a9 9 0 0 1 5.86 2.17zm-4.9-25.17h4v2h-4zm0 6h4v2h-4zm0 6h4v2h-4zm0 5h4v2h-4z"/>*/}
                                        {/*<path d="m50 11v-2h-10.07a8.258 8.258 0 0 1 .07 1 8.258 8.258 0 0 1 -.07 1z"/>*/}
                                        {/*<path d="m21 22h22v2h-22z"/>*/}
                                        {/*<path*/}
                                            {/*d="m32 16a6 6 0 1 0 -6-6 6 6 0 0 0 6 6zm-4-7h3v-3h2v3h3v2h-3v3h-2v-3h-3z"/>*/}
                                        {/*<path d="m50 23h10v2h-10z"/>*/}
                                        {/*<path*/}
                                            {/*d="m51.04 56h-38.08a7.007 7.007 0 0 0 -4.56 1.69l-2.7 2.31h52.6l-2.7-2.31a7.007 7.007 0 0 0 -4.56-1.69z"/>*/}
                                        {/*<path*/}
                                            {/*d="m7.1 56.17a9 9 0 0 1 5.86-2.17h1.04v-27h-8v30.11zm.9-25.17h4v2h-4zm0 6h4v2h-4zm0 6h4v2h-4zm0 5h4v2h-4z"/>*/}
                                        {/*<path d="m4 23h10v2h-10z"/>*/}
                                    {/*</g>*/}
                                {/*</svg>*/}
                            </sapn>
                            <img className="stars-icon" src={hospital} alt="icon"/>
                            <h4>Access to Hospitals</h4>
                            <p>Your services are all close by public transit or private car</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <img className="stars-icon" src={kit} alt="icon"/>
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
                                <button className="btn btn-outline-primary">BROWSE RENTALS</button>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-sm-4">
                                <button className="btn btn-outline-primary explore">Turfts<br/> Medical Area
                                </button>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-outline-primary explore">St.Elezabeth's<br/> Medical
                                    Area
                                </button>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-outline-primary explore">LongWood<br/> Medical Area
                                </button>
                            </div>
                        </div>
                        <div className="row map">
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div id="brookline" className="row location-card">
                        <div className="col-sm-6 image-box">
                            <img src={corporate} className="pull-left"/>
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
                            <button className="btn btn-outline-primary">EXPLORE OUR CORPORATE ACCOMMODATIONS
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