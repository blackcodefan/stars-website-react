import React from "react";
import SolutionCard from "./SolutionCard";


class SolutionView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            solutions: [
                {
                    title: 'Private Rooms',
                    text: 'Furnished private rooms in a historic Boston brownstone right on the MBTA Green Line.\n' +
                        '                                    Affordable\n' +
                        '                                    housing with all the comforts of home, steps to Fenway Park and Boston\n' +
                        '                                    universities.',
                    category: 'private',
                    imgName: 'room1.jpg'
                },
                {
                    title: 'Apartments',
                    text: 'Feel at home in Boston with our fully furnished studio - 3+ bedroom apartments,\n' +
                        '                                    available for\n' +
                        '                                    short and extended stays. Location, location, location- Downtown, Brookline,\n' +
                        '                                    Longwood Medical,\n' +
                        '                                    Back Bay, Cambridge...',
                    category: '2-bedroom',
                    imgName: 'room2.jpg'
                },
                {
                    title: 'Homes or Townhouses',
                    text: 'Fully furnished houses and townhomes, perfect for Boston vacation rentals or\n' +
                        '                                    temporary housing. A\n' +
                        '                                    great hotel alternative with all the privacy and comfort of your own home.',
                    category: '3-bedroom',
                    imgName: 'room3.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <section className="container-fluid solution-container">
                <div className="container">
                    <h2>Short-Term Apartment Rental Solutions</h2>
                    <p>STARS of Boston is your short-term apartment rental solution in the greater Boston area. We are
                        your
                        home
                        away from home. When you're in Boston on vacation or business, as a traveling nurse or medical
                        professional,
                        touring a university, or just to walk the historic freedom trail - STARS offers personable and
                        customized
                        service, complimentary extras and much more.</p>
                    <div className="row align-items-start">
                        {
                            this.state.solutions.map((solution, key) => (
                                    <SolutionCard
                                        key={key}
                                        title={solution.title}
                                        text={solution.text}
                                        category={solution.category}
                                        imgName={solution.imgName}
                                    />
                                )
                            )
                        }

                    </div>
                </div>
            </section>
        )
    }


}

export default SolutionView;
