import 'font-awesome/css/font-awesome.min.css'
import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import {history} from "../../../_helper/history";
import DatePicker from "react-datepicker"
import DatePickerInput from "../elements/DatePickerInput";


class PropertySearchForm extends React.Component {
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
        // console.log(value, formattedValue)
        this.setState({
            checkInDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
        });
        // compare checkin and checkout date
        if (this.state.checkInDate < this.state.checkOutDate) {
            console.log("reset  checkout date")
            this.setState({checkOutDate: ''})
        }
    }

    handleCheckOutChange = (value, formattedValue) => {
        this.setState({
            checkOutDate: value,
        });
    }

    handleAdultsCountChange = (e) => {
        const reg = /^[0-9\b]+$/;
        if (e.target.value === '' || reg.test(e.target.value)) {
            this.setState({adultsCount: e.target.value});
        }
    }

    handleChildrenCountChange = (e) => {
        const reg = /^[0-9\b]+$/;
        if (e.target.value === '' || reg.test(e.target.value)) {
            this.setState({childrenCount: e.target.value});
        }
    }

    handleBrowseButtonClick = (e) => {
        history.push("/property")
    }

    handleSearchButtonClick = (e) => {
        console.log(this.state)
        alert(this.state)
        history.push("/property")
        // if (this.state.checkInDate && this.state.checkOutDate && this.state.adultsCount && this.state.childrenCount) {
        //     history.push("/property")
        // }
    }


    render() {
        return (
            <div className="row container align-items-start">
                <div className="col-md search-box-column">
                    <DatePicker
                        selected={this.state.checkInDate}
                        value={this.state.checkInDate}
                        minDate={new Date()}
                        className="form-control "
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Check In"
                        customInput={<DatePickerInput/>}
                        onChange={this.handleCheckInChange}/>
                    <DatePicker
                        selected={this.state.checkOutDate}
                        value={this.state.checkOutDate}
                        minDate={this.state.checkInDate === '' ? new Date() : this.state.checkInDate}
                        className="form-control "
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Check Out"
                        customInput={<DatePickerInput/>}
                        onChange={this.handleCheckOutChange}/>
                </div>

                <div className="col-md search-box-column">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white"><i className="fa fa-user"/></span>
                        </div>
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Adults"
                            value={this.state.adultsCount}
                            onChange={this.handleAdultsCountChange}
                            aria-label="adults"
                            aria-describedby="adults"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white"><i className="fa fa-user"/></span>
                        </div>
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Children"
                            value={this.state.childrenCount}
                            onChange={this.handleChildrenCountChange}
                            aria-label="Children"
                            aria-describedby="children"/>
                    </div>
                </div>
                <div className="col-md search-box-column">
                    <button type="button" className="btn btn-block btn-outline-primary mb-3"
                            onClick={this.handleBrowseButtonClick}>Browse all rentals
                    </button>
                    <button type="button" className="btn btn-block btn-outline-primary"
                            onClick={this.handleSearchButtonClick}>Search
                    </button>
                </div>
            </div>
        );
    }
}

export default PropertySearchForm;
