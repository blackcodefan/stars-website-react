import React from "react";

class DatePickerInput extends React.Component {

    render() {
        return (

            <div className="input-group form-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-white"><i className="fa fa-calendar" onClick={this.props.onClick}/></span>
                </div>
                <input
                    type="text"
                    className="form-control border-0"
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    onClick={this.props.onClick}
                />
            </div>
        )
    }
}

export default DatePickerInput;