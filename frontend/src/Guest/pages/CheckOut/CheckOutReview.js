import React from 'react'
import {history} from "../../../_helper/history";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import Footer from "../../components/layout/Footer";
import {Link} from "react-router-dom";


class CheckOutReview extends React.Component {
    constructor(props) {
        super(props)
    }

    handleContinue = () => {
        history.push("/checkout-payment")
    }

    render() {
        return (
            <>
                <header>
                    <section className="container-fluid main-background-2">
                        <HeaderNavbar/>
                    </section>
                </header>
                <section className="checkout-main container-fluid">
                    <div className="row align-items start container align-items-start">

                        <div className="col-xl-7 checkout-booking-info">
                            <div className="row align-items-center">
                                <div className="col-sm-9">
                                    <h3>Review Rules & Policies</h3>
                                </div>
                                <div className="col-sm text-right">
                                    <h6>Step 2 of 3</h6>
                                </div>
                            </div>

                            <div className="">
                                <ul>
                                    <li>Check-in : 3:00 PM</li>
                                    <li>Check-out : 10:00 AM</li>
                                </ul>

                                <h5>House Rules</h5>
                                <ul>
                                    <li>No smoking</li>
                                    <li>Complimentary Wi-Fi</li>
                                    <li>No parties or events</li>
                                    <li>No pets</li>
                                </ul>

                                <h5>Cancellation Policy</h5>
                                <p>50% refund it cancelled 60 days prior to arrival</p>

                                <h5>Damage Policy</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl ipsum,
                                    aliquam
                                    nec commodo nec, blandit a sem. Aenean tempor ultrices vulputate. </p>

                                <a href="#"><b><u>Download Rental Agreement</u></b></a>

                                <ul>
                                    <li>I have read and agree to comply with all rental policies and terms.</li>
                                </ul>
                            </div>

                            <div className="row align-items-start">
                                <div className="col-sm">

                                </div>
                                <div className="col-sm-5 text-center button">
                                    <button type="button" className="btn btn-outline-primary" onClick={this.handleContinue}>Continue</button>
                                </div>
                            </div>

                            <p><Link to="/contact">contact us</Link> if you want more information about long-term
                                (+30
                                days) reservations.</p>
                        </div>


                        <div className="col-md checkout-property-info">
                            <div className="row text-right">
                                <div className="checkout-box col-xl">

                                    <div className="booking-information text-left ">

                                        <div className="booking-images text-left align-items-start">
                                            <button type="button" className="btn btn-secondary btn-secondary"><i
                                                className="icon360"/></button>
                                            <button type="button" className="btn btn-secondary btn-secondary-2">Browse
                                                Photos
                                            </button>
                                        </div>

                                        <div className="checkout-titles">
                                            <h3 className="checkout-title">Sunny Top Floor Private Room</h3>
                                            <h5 className="checkout-subtitle">Brookline | st. Mary's | coolidge
                                                corner</h5>
                                        </div>

                                        <div className="row checkout-boxes">
                                            <div className='col-lg'>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white"><i
                                                        className="fa fa-calendar"/></span>
                                                    </div>
                                                    <input type="text" className="form-control border-left-0"
                                                           placeholder="Check In" aria-label="checkin"
                                                           aria-describedby="check in"/>

                                                </div>

                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white"><i
                                                        className="fa fa-calendar"/></span>
                                                    </div>
                                                    <input type="text" className="form-control border-left-0"
                                                           placeholder="Check Out" aria-label="checkout"
                                                           aria-describedby="check out"/>

                                                </div>
                                            </div>

                                            <div className='col-lg'>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white"><i
                                                        className="fa fa-user"/></span>
                                                    </div>
                                                    <input type="text" className="form-control border-left-0"
                                                           placeholder="Adults" aria-label="adults"
                                                           aria-describedby="adults"/>
                                                </div>

                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white"><i
                                                        className="fa fa-user"/></span>
                                                    </div>
                                                    <input type="text" className="form-control border-left-0"
                                                           placeholder="Children" aria-label="Children"
                                                           aria-describedby="children"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row checkout-boxes">
                                            <div className='col-sm'>
                                                <ul>
                                                    <li>$89 x 3 nights</li>
                                                    <li>Cleaning fee</li>
                                                    <li>Service fee (4%)</li>
                                                    <li>Tax</li>
                                                    <li><b>Total</b></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm text-right'>
                                                <ul>
                                                    <li>$200</li>
                                                    <li>$20</li>
                                                    <li>$20</li>
                                                    <li>$20</li>
                                                    <li><b>$300</b></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <hr className="border1"/>

                                        <div className="row checkout-boxes">
                                            <div className='col-sm'>
                                                <ul>
                                                    <li>Refundable Damage Deposit</li>
                                                    <li>Total + Deposit</li>
                                                </ul>
                                            </div>
                                            <div className='col-sm text-right'>
                                                <ul>
                                                    <li>$20</li>
                                                    <li>$320</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row text-center checkout-contact">
                                            <p>For booking assistance please <Link to="/contact">contact us</Link></p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <Footer/>
            </>

        )
    }


}

export default CheckOutReview