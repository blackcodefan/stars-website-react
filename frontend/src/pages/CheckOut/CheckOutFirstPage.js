import React from 'react'
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import {history} from "../../_helper/history"
import {currentPropertyAction} from "../../redux/actions";
import {connect} from "react-redux";
import BookingForm from "../../components/elements/BookingForm";


class CheckOutFirstPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentProperty: {
                id: this.props.match.params.id,
                address: '',
                title: '',
                dailyFee: '',
                cleaningFee: '',
                serviceFee: '',
                tax: '',
                damageDeposit: ''
            },
            guest: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            },
            booking: {
                checkInDate: '',
                checkOutDate: '',
                adultsCount: '',
                childrenCount: '',
                days: '',
                total: ''
            }
        }
    }

    componentDidMount() {
        this.props.getPropertyDetail(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({currentProperty: nextProps.currentProperty})
    }

    handleContinue = () => {
        console.log("========booking data=========", this.state)
        if (this.state.booking.checkInDate === '' || this.state.booking.checkOutDate === '') {
            alert('please insert date')
            return false
        }
        if (this.state.booking.adultsCount === '' && this.state.booking.childrenCount === '') {
            alert('please insert number of people')
            return false
        }
        history.push("/checkout-review")
    }

    handleCheckInChange = (value, formattedValue) => {
        let booking = {...this.state.booking}
        booking.checkInDate = value;
        this.setState({booking})
        if (this.state.booking.checkInDate < this.state.booking.checkOutDate) {
            console.log("reset  checkout date")
            booking.checkOutDate = ''
            this.setState({booking})
        }
    }

    handleCheckOutChange = (value, formattedValue) => {
        let booking = {...this.state.booking}
        booking.checkOutDate = value;
        this.setState({booking})
    }

    handleAdultsCountChange = (e) => {
        if (this.validateNumber(e.target.value)) {
            let booking = {...this.state.booking}
            booking.adultsCount = e.target.value;
            this.setState({booking})
        }
    }

    handleChildrenCountChange = (e) => {
        if (this.validateNumber(e.target.value)) {
            let booking = {...this.state.booking}
            booking.childrenCount = e.target.value;
            this.setState({booking})
        }
    }

    validateNumber = (value) => {
        const reg = /^[0-9\b]+$/;
        if (value === '' || reg.test(value)) {
            return true
        }
    }

    render() {
        return (
            <>
                <header>
                    <section className="container-fluid main-background">
                        <HeaderNavbar/>
                    </section>
                </header>
                <section className="checkout-main container-fluid">
                    <div className="row align-items start container align-items-start">

                        <div className="col-xl-7 checkout-booking-info">
                            <div className="row align-items-center">
                                <div className="col-sm-9">
                                    <h3>Begin your booking</h3>
                                </div>
                                <div className="col-sm text-right">
                                    <h6>Step 1 of 3</h6>
                                </div>
                            </div>

                            <h5>Contact Information</h5>

                            <form action="" method="post">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputName"
                                                   placeholder="First Name"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="inputEmail"
                                                   placeholder="Last Name"
                                                   required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="inputEmail"
                                                   placeholder="Email"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="phone" className="form-control" id="inputPhone"
                                                   placeholder="Phone Number" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-start">
                                    <div className="col-sm">
                                        <p>By clicking 'Agree & continue' you are agreeing to our <a href="#"><b><u>Terms
                                            &
                                            Conditions</u></b></a> and <a href="#"><b><u>Privacy Policy</u></b></a></p>
                                    </div>
                                    <div className="col-sm-5 text-center">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            onClick={this.handleContinue}>
                                            Agree and Continue
                                        </button>
                                        <div className="small-checkout-link">
                                            <a href="#"><u>View Cancellation Policy</u></a>
                                        </div>
                                    </div>
                                </div>

                                <p><a href="#"><b><u>Contact us</u></b></a> if you want more information about long-term
                                    (+30 days) reservations.</p>
                            </form>

                        </div>

                        <div className="col-md checkout-property-info">

                            <div className="row text-right">
                                <div className="checkout-box col-xl">

                                    <div className="booking-information text-left ">

                                        <div className="booking-images text-left align-items-start">
                                            <button type="button" className="btn btn-secondary btn-secondary">
                                                <i className="icon360"/></button>
                                            <button type="button" className="btn btn-secondary btn-secondary-2">Browse
                                                Photos
                                            </button>
                                        </div>

                                        <div className="checkout-titles">
                                            <h3 className="checkout-title">{this.state.currentProperty.title}</h3>
                                            <h5 className="checkout-subtitle">{this.state.currentProperty.address}</h5>
                                        </div>

                                        <div className="row checkout-boxes">
                                            <BookingForm
                                                checkInDate={this.state.booking.checkInDate}
                                                checkOutDate={this.state.booking.checkOutDate}
                                                adultsCount={this.state.booking.adultsCount}
                                                childrenCount={this.state.booking.childrenCount}
                                                handleCheckInChange={this.handleCheckInChange}
                                                handleCheckOutChange={this.handleCheckOutChange}
                                                handleAdultsCountChange={this.handleAdultsCountChange}
                                                handleChildrenCountChange={this.handleChildrenCountChange}
                                            />
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
                                                    <li>${this.state.currentProperty.dailyFee * this.state.booking.days}</li>
                                                    <li>${this.state.currentProperty.cleaningFee}</li>
                                                    <li>${this.state.currentProperty.serviceFee}</li>
                                                    <li>${this.state.currentProperty.tax}</li>
                                                    <li><b>${this.state.booking.total}</b></li>
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
                                            <p>For booking assistance please <u><a href="#">contact us</a></u></p>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }

}


const mapStateToProps = (state) => {
    const {currentProperty} = state;
    return {
        currentProperty
    }
}

const mapDispatchToProps = dispatch => ({
    getPropertyDetail: (id) => dispatch(currentPropertyAction.getPropertyDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutFirstPage)