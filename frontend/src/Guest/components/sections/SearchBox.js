import 'font-awesome/css/font-awesome.min.css'
import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import PropertySearchForm from "../layout/PropertySearchForm";


class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPath: '',
            marginTop: ''
        }
    }

    render() {
        const { currentPath,marginTop }= this.props

        return (
            <div className="search-box container" style={{marginTop: marginTop}}>
                {
                    (currentPath === '/Apartments' || currentPath ==='/') ?
                        <div>
                            <h1>
                                Quick search your perfect accomodation
                            </h1>
                            <p>Short term furnished apartment rentals in Boston</p>
                        </div> : ''
                }

                <PropertySearchForm/>
            </div>
        );
    }
}



export default SearchBox;
