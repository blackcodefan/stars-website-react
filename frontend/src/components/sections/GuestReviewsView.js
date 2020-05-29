import React from "react";



class GuestReviewsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <section className="container-fluid reviews">
                <h2 className="text-center">Guest Reviews</h2>
                <div className="row container align-items-start">
                    <div className="col-lg review">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada
                            auctor. Sed
                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan
                            tincidunt."</p>
                        <div className="blockquote"><p>Name Surname</p>
                            <div className="star">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg review">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada
                            auctor. Sed
                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan
                            tincidunt."</p>
                        <div className="blockquote"><p>Name Surname</p>
                            <div className="star">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg review">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada
                            auctor. Sed
                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan
                            tincidunt."</p>
                        <div className="blockquote"><p>Name Surname</p>
                            <div className="star">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default GuestReviewsView;