import React from 'react'
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import {history} from "../../../_helper/history"
import {currentPropertyAction} from "../../../redux/actions";
import {connect} from "react-redux";
import BookingForm from "../../components/elements/BookingForm";
import Footer from "../../components/layout/Footer";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";


class CheckOutStart extends React.Component {
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
        this.setState({ currentProperty: nextProps.currentProperty })
    }

    handleCheckInChange = (value, formattedValue) => {
        const booking = {
            ...this.state.booking,
            days: '',
            checkInDate: value,
        }
        console.log(booking)
        this.setState({booking})
        if (this.state.booking.checkInDate < this.state.booking.checkOutDate) {
            console.log("reset  checkout date")
            booking.checkOutDate = ''
            this.setState({booking})
        }
    }

    handleCheckOutChange = (value, formattedValue) => {
        let days = (value - this.state.booking.checkInDate) / (1000 * 3600 * 24)
        console.log(this.state.currentProperty.dailyFee * days)
        let total = this.state.currentProperty.dailyFee * days + this.state.currentProperty.cleaningFee + this.state.currentProperty.serviceFee + this.state.currentProperty.tax
        const booking = {
            ...this.state.booking,
            days: days,
            checkOutDate: value,
            total: total,
        }
        console.log(booking)
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

    handleSubmit = (fields) => {
        const guest = {
            firstName: fields.firstName,
            lastName: fields.lastName,
            email: fields.email,
            phoneNumber: fields.phoneNumber
        }
        this.setState({
            guest: guest
        })
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        console.log("========booking data=========", this.state)
        if (this.state.booking.checkInDate === '' || this.state.booking.checkOutDate === '') {
            alert('please select date')
            return false
        }
        if (this.state.booking.adultsCount === '' && this.state.booking.childrenCount === '') {
            alert('please insert number of people')
            return false
        }
        history.push("/checkout-review")
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
                                    <h4>Begin your booking</h4>
                                </div>
                                <div className="col-sm text-right">
                                    <h6>Step 1 of 3</h6>
                                </div>
                            </div>
                            <h5>Contact Information</h5>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    phoneNumber: '',
                                }}
                                validationSchema={Yup.object().shape({
                                    firstName: Yup.string()
                                        .required('First Name is required'),
                                    lastName: Yup.string()
                                        .required('Last Name is required'),
                                    email: Yup.string()
                                        .email('Email is invalid')
                                        .required('Email is required'),
                                    phoneNumber: Yup.number()
                                        .required('number is required'),
                                })}
                                onSubmit={fields => {
                                    this.handleSubmit(fields)
                                }}
                                render={({errors, status, touched}) => (
                                    <Form className="contact-form">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="col-md input-group">
                                                    <Field name="firstName" type="text" placeholder="   Firs tName"
                                                           className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : ' mb-3')}/>
                                                    <ErrorMessage name="firstName" component="div"
                                                                  className="invalid-feedback"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-md input-group">
                                                    <Field name="lastName" type="text" placeholder="   Last Name"
                                                           className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : ' mb-3')}/>
                                                    <ErrorMessage name="lastName" component="div"
                                                                  className="invalid-feedback"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-md input-group">
                                                    <Field name="email" type="text" placeholder="   Your Email"
                                                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : ' mb-3')}/>
                                                    <ErrorMessage name="email" component="div"
                                                                  className="invalid-feedback"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="col-md input-group">
                                                    <Field name="phoneNumber" type="text"
                                                           placeholder="   Your PhoneNumber"
                                                           className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : ' mb-3')}/>
                                                    <ErrorMessage name="phoneNumber" component="div"
                                                                  className="invalid-feedback"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-start">
                                            <div className="col-sm">
                                                <p>By clicking 'Agree & continue' you are agreeing to our <Link
                                                    to="/terms-and-conditions"><b><u>Terms
                                                    &
                                                    Conditions</u></b></Link> and <Link to="/privacy-policy"><b><u>Privacy
                                                    Policy</u></b></Link></p>
                                            </div>
                                            <div className="col-sm-5 text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-outline-primary">
                                                    Agree and Continue
                                                </button>
                                                <div className="small-checkout-link">
                                                    <Link to="/cancellation-policy"><u>View Cancellation
                                                        Policy</u></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p><Link to="/contact"><b><u>Contact us</u></b></Link> if you want more
                                            information
                                            about long-term
                                            (+30 days) reservations.</p>
                                    </Form>
                                )
                                }
                            />
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
                                                    <li>$ {this.state.currentProperty.dailyFee} {this.state.booking.days !== '' ? `* ${this.state.booking.days} nights`: '' }</li>
                                                    <li>Cleaning fee</li>
                                                    <li>Service fee (4%)</li>
                                                    <li>Tax</li>
                                                    <li><b>Total</b></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm text-right'>
                                                <ul>
                                                    <li>{this.state.booking.days !== '' ? `$ ${this.state.currentProperty.dailyFee * this.state.booking.days}` : ''}</li>
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
                                                    <li>${this.state.currentProperty.damageDeposit}</li>
                                                    <li>${this.state.booking.total + this.state.currentProperty.damageDeposit}</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row text-center checkout-contact">
                                            <p>For booking assistance please <Link to="/contact"><b><u>Contact
                                                us</u></b></Link></p>
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


const mapStateToProps = (state) => {
    const {currentProperty} = state;
    return {
        currentProperty
    }
}

const mapDispatchToProps = dispatch => ({
    getPropertyDetail: (id) => dispatch(currentPropertyAction.getPropertyDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutStart)