import React from "react";
import imgStayinboston from '../../assets/images/stayinboston.jpg'
import 'font-awesome/css/font-awesome.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faStar}from '@fortawesome/free-solid-svg-icons'
// library.add(faStar)


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
                                    <li><i className="fa fa-star"/>Complimentary Wi-Fi</li>
                                    <li><i className="fa fa-star"/>Coffee Maker + Coffee</li>
                                    <li><i className="fa fa-star"/>Hair Dryer</li>
                                    <li><i className="fa fa-star"/>Heat + Air Conditioning</li>
                                    <li><i className="fa fa-star"/>Quiet and Professional Building</li>
                                    <li><i className="fa fa-star"/>Fully Equipped Kitchens</li>
                                    <li><i className="fa fa-star"/>Tableware + Utensils</li>
                                </ul>
                            </div>

                            <div className="col-md stay-list">
                                <ul>
                                    <li><i className="fa fa-star"/>Desk or Work Space</li>
                                    <li><i className="fa fa-star"/>Express Check-In + Check-Out</li>
                                    <li><i className="fa fa-star"/>MBTA Access</li>
                                    <li><i className="fa fa-star"/>Iron + Ironing Board</li>
                                    <li><i className="fa fa-star"/>Welcome Gift Basket</li>
                                    <li><i className="fa fa-star"/>Linens + Towels</li>
                                    <li><i className="fa fa-star"/>Curated Local Information</li>
                                </ul>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-primary">More About Us</button>
                    </div>
                    <div className="stay-image col-lg">
                        <img src={imgStayinboston}/>
                    </div>
                </div>
            </section>


        )
    }
}

export default StayView;