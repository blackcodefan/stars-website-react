import React from "react";
import corporateHousing from '../../assets/images/corporatehousing.jpg'

class HousingView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="container-fluid corporate-housing">
                <div className="row container">
                    <div className="col-md">
                        <h2>Corporate Housing</h2>
                        <p>Our fully-furnished corporate housing is perfect for business travellers. It provides the
                            perfect
                            workspace for productivity, with wi-fi and self check-in.</p>
                        <p>
                            Apart from saving time, you will also save money. Have all the amenities from hotels, at a
                            fraction of
                            the cost.</p>
                        <button type="button" className="btn btn-outline-primary">Read More</button>
                    </div>
                    <div className="stay-image col-md">
                        <img src={ corporateHousing } alt="corporate"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default HousingView;