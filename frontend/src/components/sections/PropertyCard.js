import React from 'react'
import styled from 'styled-components';
import {history} from "../../_helper/history"


class PropertyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleBookClick = (id) => {
        history.push(
            `/book/${id}`
        )
    }

    handlePropertyClick = (id) => {
        // history.push(
        //     `/property/${id}`
        // )
        history.push(`/property-detail`)
    }

    render() {
        const {id, address, title, price, countBed, countSleep, rentalParking, countBath, furnished, petsConsidered, bgImgLink} = this.props
        // const CardBackground = styled.div`
        //     background-image: `url(${props => props.imgObj ? props.imgObj.url : 'PLACEHOLDERIMG.png'})` // this is where I think the problem is
        // `

        return (

            <div className="col-xs">
                <div className="col-md property-card">
                    <div className="home-title" style={{backgroundImage: `url(../../images/${bgImgLink})`}}>
                        <h5>{address}</h5>
                        <h3>{title}</h3>
                    </div>

                    <div className="row align-items-start features-property">
                        <div className="features-property-column">
                            <ul>
                                <li>
                                    <i className="fa fa-door-open"></i>
                                    {countBed} Bedroom
                                </li>
                                <li>
                                    <i className="fa fa-user-friends"></i>
                                    Sleeps {countSleep}
                                </li>
                                <li>
                                    <i className="fa fa-parking"></i>
                                    {
                                        rentalParking && "Rental Parking"
                                    }
                                </li>
                            </ul>
                        </div>

                        <div className="features-property-column">
                            <ul>
                                <li>
                                    <i className="fa fa-bath"></i>
                                    {countBath} Bathroom
                                </li>
                                <li>
                                    <i className="fa fa-couch"></i>
                                    {
                                        furnished && "Furnished"
                                    }
                                </li>
                                <li>
                                    <i className="fa fa-paw"></i>
                                    {
                                        petsConsidered && "Pets considered"
                                    }
                                </li>
                            </ul>
                        </div>

                        <div className="features-property-column price-property">
                            <h4>{price}</h4>
                            <p>per night</p>
                        </div>
                    </div>

                    <div className="row button-group">
                        <div className="">
                            <button type="button" className="btn btn-outline-primary button-property"
                                    onClick={() => this.handleBookClick(id)}>Quick
                                book
                            </button>
                        </div>
                        <div className="">
                            <button type="button" className="btn btn-outline-primary button-property"
                                    onClick={() => this.handlePropertyClick(id)}>View
                                Property
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }


}


export default PropertyCard;