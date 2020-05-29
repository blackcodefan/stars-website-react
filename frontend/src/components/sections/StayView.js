import React from "react";
import stayinboston from '../../assets/images/stayinboston.jpg'


class StayView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="container-fluid grey-background">
                <div className="row container stay-simplified">
                    <div className="col-lg">
                        <h2>Your Stay in Boston Simplified</h2>
                        <div className="row align-items-start">
                            <div className="col-md stay-list">
                                <ul>
                                    <li><span>★</span>Complimentary Wi-Fi</li>
                                    <li><span>★</span>Coffee Maker + Coffee</li>
                                    <li><span>★</span>Hair Dryer</li>
                                    <li><span>★</span>Heat + Air Conditioning</li>
                                    <li><span>★</span>Quiet and Professional Building</li>
                                    <li><span>★</span>Fully Equipped Kitchens</li>
                                    <li><span>★</span>Tableware + Utensils</li>
                                </ul>
                            </div>

                            <div className="col-md stay-list">
                                <ul>
                                    <li><span>★</span>Desk or Work Space</li>
                                    <li><span>★</span>Express Check-In + Check-Out</li>
                                    <li><span>★</span>MBTA Access</li>
                                    <li><span>★</span>Iron + Ironing Board</li>
                                    <li><span>★</span>Welcome Gift Basket</li>
                                    <li><span>★</span>Linens + Towels</li>
                                    <li><span>★</span>Curated Local Information</li>
                                </ul>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-primary">More About Us</button>
                    </div>
                    <div className="stay-image col-lg">
                        <img src={stayinboston}/>
                    </div>
                </div>
            </section>


        )
    }
}

export default StayView;