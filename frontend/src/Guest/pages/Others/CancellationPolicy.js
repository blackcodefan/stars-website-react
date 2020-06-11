import React from 'react'
import {Link} from "react-router-dom";
import Footer from "../../components/layout/Footer";
import HeaderNavbar from "../../components/layout/HeaderNavbar";

class CancellationPolicy extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <section className="container-fluid main-background-2">
                    <HeaderNavbar/>
                </section>
                <div className="container mt-lg-5 mb-lg-5 main-text">
                    <h2>Refund Policy</h2>
                    <div className="pl-lg-5">
                        <h4>Payment Policy</h4>
                        <p>When you confirm a reservation through our website, you have authorized STARS of Boston to
                            collect and remit various fees and charges that will be due and owing by you in connection
                            with your use of the the Accommodation, including, without limitation, the prepayment amount
                            as set out in the Reservation Summary, Accommodation Fees, and all fees, charges and taxes
                            payable with respect to your booking and use and occupancy of the Accommodation and use of
                            any services provided. Upon receipt by you of the Confirmation of Booking, you will
                            immediately be required to pay, and STARS of Boston will charge the debit or credit card
                            that you have supplied, an amount equal to the prepayment amount required to be paid on
                            confirmation of booking as shall be set out in the Reservation Summary (which may be the
                            entire amount of the fees due and all taxes or other fees dues with respect to your
                            Booking).
                        </p>

                        <h4>Cancellation Policy</h4>
                        <p>You can cancel for free, without any charges, within 4 hours of making your reservation.</p>
                        <p>After the 4 hour period, the following policy applies:</p>
                        <p>(i) If you are cancelling 60 days prior to your arrival, you will receive a 50% refund.</p>
                        <p>(ii) If your cancellation is within 60 days of your arrival, no refund will be issued.</p>

                        <h4>Refundable Security Deposit</h4>
                        <p>There is a refundable security deposit of the amount $500 for every reservation with us. If
                            paying via a credit or a debit card, the security deposit will be an authorization on your
                            card. No money will actually be taken out of your account, unless there are damages. The
                            authorization will be made 2 days prior to arrival and the hold will be released within 7
                            days of departure depending on your bank. Note for international banks: The release may take
                            longer up to 30 days.</p>
                        <p>If you have any questions regarding the refund policy or payment policy, please send us an
                            email at info@starsofboston.com or contact us from the <Link to="/Contact">contact us</Link> page.</p>

                    </div>
                </div>
                <Footer/>
            </header>
        )
    }

}

export default CancellationPolicy