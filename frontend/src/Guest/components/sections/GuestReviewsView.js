import React from "react";
import GuestReviewCard from "./GuestReviewCard";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


class GuestReviewsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [
                {
                    guestName: 'Jhon Doe',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malessdfguada\n' +
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
                {
                    guestName: 'Jordan',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dui vel metus malesuada\n' +
                        '                            auctor. Sed\n' +
                        '                            efficitur congue dapibus. Mauris pharetra sagittis maximus. Sed et arcu et magna accumsan\n' +
                        '                            tincidunt.',
                    rating: '5',
                },
            ],
            currentIndex: 0,
            itemsInSlide: 1,
            responsive: {0: {items: 3}},
            galleryItems: [],
        }

    }

    componentDidMount() {
        this.setState({galleryItems: this.galleryItems()})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // this.setState({galleryItems: nextProps.reviews})
    }

    galleryItems() {
        const gItems = []
        this.state.reviews.map((review, index) => {
            gItems.push(<GuestReviewCard
                key={index}
                text={review.text}
                guestName={review.guestName}
                rating={review.rating}/>)

        })
        return gItems
        // return Array(7)
        //     .fill()
        //     .map((item, i) => <h2 className="item">{i + 1}</h2>)
    }

    slidePrevPage = () => {
        const currentIndex = this.state.currentIndex - this.state.itemsInSlide
        this.setState({currentIndex})
    }

    slideNextPage = () => {
        const {
            itemsInSlide,
            galleryItems: {length},
        } = this.state
        let currentIndex = this.state.currentIndex + itemsInSlide
        if (currentIndex > length) currentIndex = length

        this.setState({currentIndex})
    }

    handleOnSlideChange = (event) => {
        const {itemsInSlide, item} = event
        this.setState({itemsInSlide, currentIndex: item})
    }


    render() {
        const {currentIndex, galleryItems, responsive} = this.state

        return (
            <section className="container-fluid reviews">
                <h2 className="text-center">Guest Reviews</h2>
                <div className="row container align-items-start" style={{position: 'relative'}}>
                    <AliceCarousel
                        items={galleryItems}
                        slideToIndex={currentIndex}
                        responsive={responsive}
                        mouseTrackingEnabled={true}
                        onInitialized={this.handleOnSlideChange}
                        onSlideChanged={this.handleOnSlideChange}
                        onResized={this.handleOnSlideChange}
                        buttonsDisabled={true}
                    />
                    <i className="arrow right" onClick={this.slidePrevPage}/>
                    <i className="arrow left" onClick={this.slideNextPage}/>
                </div>
            </section>
        )
    }
}

export default GuestReviewsView;
