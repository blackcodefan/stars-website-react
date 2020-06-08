import React from "react";
import {history} from "../../../_helper/history"
import StarRatingComponent from 'react-star-rating-component';


class GuestReviewCard extends React.Component {

    render() {
        const {text, guestName, rating} = this.props
        return (
            <div className="col-lg review">
                <p>{text}</p>
                <div className="blockquote">
                    <h4>{guestName}</h4>
                    <StarRatingComponent
                        name="GuestRating"
                        editing={false}
                        starCount={5}
                        value={parseInt(rating)}
                        renderStarIcon={() => (<span><i className="fa fa-star"/></span>)}
                    />
                </div>
            </div>
        )
    }

};

export default GuestReviewCard;
