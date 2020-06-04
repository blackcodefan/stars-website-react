import React from 'react'
import DatePickerInput from "./DatePickerInput";
import DatePicker from "react-datepicker";


class BookingForm extends React.Component {

    render() {
        const {checkInDate, checkOutDate, adultsCount, childrenCount, handleCheckInChange, handleCheckOutChange, handleAdultsCountChange, handleChildrenCountChange} = this.props
        return (
            <>
                <div className="row check-form">
                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <DatePicker
                            selected={checkInDate}
                            value={checkInDate}
                            minDate={new Date()}
                            className="form-control border-left-0"
                            dateFormat="MM/dd/yyyy"
                            placeholderText="CheckIn"
                            customInput={<DatePickerInput/>}
                            onChange={handleCheckInChange}/>
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
                            onChange={handleCheckOutChange}/>
                    </div>
                </div>
                <div className="row check-form">
                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <div className="input-group mb-3  center-block">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white">
                                    <i
                                        className="fa fa-user"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control border-left-0"
                                placeholder="Adults"
                                value={adultsCount}
                                onChange={handleAdultsCountChange}
                                aria-label="adults"
                                aria-describedby="adults"/>
                        </div>
                    </div>

                    <div className='col-xs-6 col-sm-6 col-lg-6'>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white">
                                    <i
                                        className="fa fa-user"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control border-left-0"
                                placeholder="Children"
                                value={childrenCount}
                                onChange={handleChildrenCountChange}
                                aria-label="Children"
                                aria-describedby="children"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BookingForm