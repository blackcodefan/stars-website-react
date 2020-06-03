import React from 'react'
import DatePicker from "../../pages/Property/PropertyDetail";
import DatePickerInput from "./DatePickerInput";

class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkInDate: '',
            checkOutDate: '',
            adultsCount: '',
            childrenCount: '',
        }
    }


    handleCheckInChange = (value, formattedValue) => {
        this.setState({checkInDate: value})
        if (this.state.checkInDate < this.state.checkOutDate) {
            console.log("reset  checkout date")
            this.setState({checkOutDate: ''})
        }
    }

    handleCheckOutChange = (value, formattedValue) => {
        this.setState({checkOutDate: value})
    }

    handleAdultsCountChange = (e) => {
        if (this.validateNumber(e.target.value)) {

            this.setState({adultsCount: e.target.value})
        }
    }

    handleChildrenCountChange = (e) => {
        if (this.validateNumber(e.target.value)) {
            this.setState({childrenCount: e.target.value})
        }
    }

    validateNumber = (value) => {
        const reg = /^[0-9\b]+$/;
        if (value === '' || reg.test(value)) {
            return true
        }
    }

    render() {
        const {checkInDate, checkOutDate, adultsCount, childrenCount} = this.props
        return (
            <>

                <div className="row checkout-boxes">
                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <DatePicker
                            selected={checkInDate}
                            value={checkInDate}
                            minDate={new Date()}
                            className="form-control border-left-0"
                            dateFormat="MM/dd/yyyy"
                            placeholderText="CheckIn"
                            customInput={<DatePickerInput/>}
                            onChange={this.handleCheckInChange}/>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <DatePicker
                            selected={checkOutDate}
                            value={checkOutDate}
                            minDate={checkInDate === '' ? new Date() : checkInDate}
                            className="form-control border-left-0"
                            dateFormat="MM/dd/yyyy"
                            placeholderText="CheckOut"
                            customInput={<DatePickerInput/>}
                            onChange={this.handleCheckOutChange}/>
                    </div>
                </div>
                <div className="row checkout-boxes">
                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <div className="input-group mb-3  center-block">
                            <div className="input-group-prepend">
                                                            <span className="input-group-text bg-white"><i
                                                                className="fa fa-user"/></span>
                            </div>
                            <input
                                type="text"
                                className="form-control border-left-0"
                                placeholder="Adults"
                                value={adultsCount}
                                onChange={this.handleAdultsCountChange}
                                aria-label="adults"
                                aria-describedby="adults"/>
                        </div>
                    </div>

                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                                            <span className="input-group-text bg-white"><i
                                                                className="fa fa-user"/></span>
                            </div>
                            <input
                                type="text"
                                className="form-control border-left-0"
                                placeholder="Children"
                                value={childrenCount}
                                onChange={this.handleChildrenCountChange}
                                aria-label="Children"
                                aria-describedby="children"/>
                        </div>
                    </div>

                </div>
                <div className="row checkout-boxes align-items-start">
                    <div className='col-sm'>
                        <ul>
                            <li><b>Total</b></li>
                            <li>Includes Taxes and Fees</li>
                        </ul>
                    </div>
                    <div className='col-sm text-right'>
                        <ul>
                            <li><b>$300</b></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default BookingForm