import React from "react";
import {Image} from "react-bootstrap";
import icon1 from '../../assets/images/icons/icons_1.svg'
import icon2 from '../../assets/images/icons/icons_2.svg'
import icon3 from '../../assets/images/icons/icons_3.svg'
import icon4 from '../../assets/images/icons/icons_4.svg'
import icon5 from '../../assets/images/icons/icons_5.svg'
import icon6 from '../../assets/images/icons/icons_6.svg'
import icon7 from '../../assets/images/icons/icons_7.svg'
import icon8 from '../../assets/images/icons/icons_8.svg'
import icon9 from '../../assets/images/icons/icons_9.svg'
import icon10 from '../../assets/images/icons/icons_10.svg'

class ExperienceView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="container-fluid text-center stars-background">
                <div className="container">
                    <h2>The STARS Experience</h2>
                    <div className="row align-items-start">
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={ icon1} alt="icon"/>
                            <h4>Feel at home in Boston</h4>
                            <p>Beautifully furnished rentals with the amenities and comforts of home</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={ icon2 } alt="icon"/>
                            <h4>The right fit</h4>
                            <p>Medical travel, travel nurses, corporate housing, or university visits, we have the right
                                rental for
                                you</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={ icon3 } alt="icon"/>
                            <h4>Short or Long Stays</h4>
                            <p>Available daily, weekly, or monthly</p>
                        </div>
                    </div>
                    <div className="row align-items-start">
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={ icon4 } alt="icon"/>
                            <h4>Personalized service</h4>
                            <p>Friendly, responsive customer service works to ensure all your needs are met</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={ icon5 } alt="icon"/>
                            <h4>In-demand locations</h4>
                            <p>Minutes from public transportation, with easy access to shopping, dining, hospitals,
                                universities,
                                and tourist attractions</p>
                        </div>
                        <div className="stars-item col-sm-6 col-md-4">
                            <Image className="stars-icon" src={ icon6 } alt="icon"/>
                            <h4>Leave it to a Local</h4>
                            <p>From city attractions to local haunts, rely on our insider knowledge for the best Boston
                                experience</p>
                        </div>
                    </div>
                    <div className="container vip-services">
                        <h3>VIP Services</h3>
                        <div className="row">
                            <div className="stars-item vip-item col-sm">
                                <div className="row">
                                    <div className="col-lg">
                                        <Image className="stars-icon" src={ icon7 } alt="icon"/>
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
                                        <Image className="stars-icon" src={ icon8 } alt="icon"/>
                                    </div>
                                    <div className="col-lg">
                                        <h4>Child care</h4>
                                        <p>Pack-and-play rentals and dependable babysitting services to ensure the whole
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
                                        <Image className="stars-icon" src={ icon9 } alt="icon"/>
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
                                        <Image className="stars-icon" src={ icon10} alt="icon"/>
                                    </div>
                                    <div className="col-lg">
                                        <h4>Spa service</h4>
                                        <p>Ready to let off some steam? Bring in-house spa services to your rental</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}

export default ExperienceView;