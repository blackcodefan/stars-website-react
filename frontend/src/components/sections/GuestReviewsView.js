import React from "react";
import GuestReviewCard from "./GuestReviewCard";


class GuestReviewsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [
                {
                    guestName: 'Jhon Doe',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada\n' +
                        '                            auctor. Sed\n' +
                        '                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan\n' +
                        '                            tincidunt.',
                    rating: '5',
                },
                {
                    guestName: 'Jane Doe',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada\n' +
                        '                            auctor. Sed\n' +
                        '                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan\n' +
                        '                            tincidunt.',
                    rating: '4',
                },
                {
                    guestName: 'Robert',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada\n' +
                        '                            auctor. Sed\n' +
                        '                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan\n' +
                        '                            tincidunt.',
                    rating: '5',
                },
            ]
        }
    }

    render() {

        return (
            <section className="container-fluid reviews">
                <h2 className="text-center">Guest Reviews</h2>
                <div className="row container align-items-start">
                    {
                        this.state.reviews.map((review, index) => (
                            <GuestReviewCard
                                key={index}
                                text={review.text}
                                guestName={review.guestName}
                                rating={review.rating}/>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default GuestReviewsView;