import React from 'react'
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import Footer from "../../components/layout/Footer";
import {Link} from "react-router-dom";


class CheckOutPayment extends React.Component {
    constructor(props) {
        super(props)
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
                                    <h3>Payment Information</h3>
                                </div>
                                <div className="col-sm text-right">
                                    <h6>Step 3 of 3</h6>
                                </div>
                            </div>

                            <h5>Payment Method</h5>
                            <ul>
                                <div className="checkmark">
                                    <label><input type="radio" name="paymentMethod" value="paypal" checked/> Paypal</label>
                                </div>
                                <div className="checkmark">
                                    <label><input type="radio" name="paymentMethod" value="creditcard"/> Credit Card</label>
                                </div>
                            </ul>

                            <h5>Billing Address</h5>

                            <form action="" method="post">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputStreet"
                                                   placeholder="Street" required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputCountry"
                                                   placeholder="Country" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputCity"
                                                   placeholder="City"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputZipcode"
                                                   placeholder="Zip Code" required/>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputState"
                                                   placeholder="State"
                                                   required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-start">
                                    <div className="col-sm">
                                        <p><b>When you book this property, your reservation will be confirmed
                                            instantly.</b>
                                        </p>
                                    </div>
                                    <div className="col-sm-5 text-center">
                                        <button type="button" className="btn btn-outline-primary">Book now</button>
                                        <div className="small-checkout-link">
                                            <Link to="/cancellation-policy">View Cancellation Policy</Link>
                                        </div>
                                    </div>
                                </div>

                                <p><Link to="/contact">contact us</Link> if you want more information about long-term
                                    (+30 days) reservations.</p>
                            </form>

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

export default CheckOutPayment