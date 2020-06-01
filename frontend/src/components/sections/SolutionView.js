import React from "react";
import room1 from "../../assets/images/room1.jpg"
import room2 from "../../assets/images/room2.jpg"
import room3 from "../../assets/images/room3.jpg"



class SolutionView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            text: '',

        }
    }

    render() {
        return (
            <section className="container-fluid overview-container">
                <div className="container">
                    <h2>Short-Term Apartment Rental Solutions</h2>
                    <p>STARS of Boston is your short-term apartment rental solution in the greater Boston area. We are your
                        home
                        away from home. When you're in Boston on vacation or business, as a traveling nurse or medical
                        professional,
                        touring a university, or just to walk the historic freedom trail - STARS offers personable and
                        customized
                        service, complimentary extras and much more.</p>
                    <div className="row align-items-start">
                        <div className="overview-box col-xl">
                            <img src={room1} alt="room1"/>
                            <div className="overview-text">
                                <h3>Private Rooms</h3>
                                <p>Furnished private rooms in a historic Boston brownstone right on the MBTA Green Line.
                                    Affordable
                                    housing with all the comforts of home, steps to Fenway Park and Boston
                                    universities.</p>
                            </div>
                            <div className="overview-button">
                                <button type="button" className="btn btn-outline-primary text-left">Explore</button>
                            </div>
                        </div>
                        <div className="overview-box col-xl">
                            <img src={room2} alt="room2"/>
                            <div className="overview-text">
                                <h3>Apartments</h3>
                                <p>Feel at home in Boston with our fully furnished studio - 3+ bedroom apartments,
                                    available for
                                    short and extended stays. Location, location, location- Downtown, Brookline,
                                    Longwood Medical,
                                    Back Bay, Cambridge...</p>
                            </div>
                            <div className="overview-button">
                                <button type="button" className="btn btn-outline-primary text-left">Explore</button>
                            </div>
                        </div>
                        <div className="overview-box col-xl">
                            <img src={room3} alt="room3"/>
                            <div className="overview-text">
                                <h3>Homes or Townhouses</h3>
                                <p>Fully furnished houses and townhomes, perfect for Boston vacation rentals or
                                    temporary housing. A
                                    great hotel alternative with all the privacy and comfort of your own home.<br/>
                                </p>
                            </div>
                            <div className="overview-button">
                                <button type="button" className="btn btn-outline-primary text-left">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }



};

export default SolutionView;
