import React from 'react'
import propTypes from 'prop-types'
import {history} from "../../../_helper/history"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core"
import {faDoorOpen, faUserFriends, faParking, faBath, faCouch, faPaw} from "@fortawesome/free-solid-svg-icons"

library.add(faDoorOpen, faUserFriends, faParking, faBath, faCouch, faPaw)


class PropertyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            src: ''
        }
    }

    handleClick = (category) => {
        history.push(`/property#${category}`)
    }

    componentDidMount() {
        this.loadImage(this.props.bgImgLink)
    }

    componentDidUpdate(prevProps, prevState, nextProps) {
        if (prevProps.bgImgLink !== this.props.bgImgLink) {
            this.loadImage(this.props.bgImgLink)
        }
    }

    loadImage(name) {
        import(`../../../assets/images/${name}`).then(image => {
            console.log(image.default);
            this.setState({src: image.default})
        }).catch(error => {
            console.log(error)
            import(`../../../assets/images/card-placeholder.jpg`).then(image => {
                this.setState({src: image.default})
            })
        })

    }

    handleBookClick = (id) => {
        history.push(
            `/checkout/${id}`
        )
    }

    handlePropertyClick = (id) => {
        history.push(
            `/property/${id}`
        )
        // history.push(`/property-detail`)
    }

    render() {
        const {id, address, title, price, countBed, countSleep, rentalParking, countBath, furnished, petsConsidered} = this.props

        return (

            <div className="col-xs">
                <div className="col-md property-card">
                    <div className="property-card-background"
                         style={{backgroundImage: `url(${this.state.src !== '' ? this.state.src : 'placeholder.jpg'})`}}>
                        <div className="property-card-title">
                            <h5>{address}</h5>
                            <h3>{title}</h3>
                        </div>
                    </div>

                    <div className="row align-items-start features-property">
                        <div className="features-property-column">
                            <ul>
                                <li>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="door-open"/>
                                    {countBed} Bedroom
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="user-friends"/>
                                    Sleeps {countSleep}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="parking"/>
                                    {
                                        rentalParking && "Rental Parking"
                                    }
                                </li>
                            </ul>
                        </div>

                        <div className="features-property-column">
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon="bath"/>
                                    {countBath} Bathroom
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="couch"/>
                                    {
                                        furnished && "Furnished"
                                    }
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="paw"/>
                                    {
                                        petsConsidered && "Pets considered"
                                    }
                                </li>
                            </ul>
                        </div>

                        <div className="features-property-column price-property">
                            <h4>{price} $</h4>
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

PropertyCard.protoTypes = {
    id: propTypes.number,
    address: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    countBed: propTypes.number,
    countBath: propTypes.number,
    countSleep: propTypes.boolean,
    rentalParking: propTypes.boolean,
    furnished: propTypes.boolean,
    petsConsidered: propTypes.boolean,
}


export default PropertyCard;