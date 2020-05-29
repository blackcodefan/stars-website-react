import React from "react";

class LocationView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <section className="container-fluid">
                <h2 className="text-center">Explore Our Locations</h2>
                <div className="row container">

                    <div className="col-md location brookline">
                        <div className="location-title"><h3>Brookline</h3></div>
                    </div>

                    <div className="col-md location boston">
                        <div className="location-title"><h3>Boston</h3></div>
                    </div>

                    <div className="col-md location cambridge">
                        <div className="location-title"><h3>Cambridge</h3></div>
                    </div>

                    <div className="col-md location quincy">
                        <div className="location-title"><h3>Quincy</h3></div>
                    </div>

                </div>
            </section>
        )
    }
}

export default LocationView;