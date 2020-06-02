import React from "react";
import DatePicker from "react-datepicker";

class DateRangePicker extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return <DatePicker
            id={this.props.id}
            selected={this.props.selected}
            onChange={this.props.onChange}
            onChangeRaw={this.props.onChangeRaw}
            onBlur={this.props.onBlur}
            peekNextMonth={true}
            showMonthDropdown={true}
            showYearDropdown={true}
            dropdownMode="select"
            placeholderText="MM/DD/YYYY"
            dateFormat="MM/DD/YYYY"
            shouldCloseOnSelect={true}
            defaultValue={null}
        />
    }
}

export default DateRangePicker;