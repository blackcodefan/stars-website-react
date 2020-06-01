import React from "react";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import SearchBox from "../../components/sections/SearchBox";
import PropertyCard from "../../components/sections/PropertyCard";

const properties = [
    {
        id: 1,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "private"
    },
    {
        id: 2,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "studio"
    },
    {
        id: 2,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "1-bedroom"
    },
    {
        id: 2,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "2-bedroom"
    },
    {
        id: 2,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "2-bedroom"
    },
    {
        id: 2,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "3-bedroom"
    },
    {
        id: 3,
        address: "Brookline | St. Mary's | Coolidge Corner",
        title: "Spacious Studio in Brownstone",
        price: "99",
        countBed: 2,
        countSleep: 2,
        countBath: 2,
        rentalParking: true,
        furnished: true,
        petsConsidered: true,
        bgImgLink: "example1.png",
        category: "private"
    },
]
const categories = [
    "private", "studio", "1-bedroom", "2-bedroom", "3-bedroom"
]

class PropertyListing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            properties: [],
            filteredProperties: []
        }
    }

    componentDidMount() {
        this.setState({
            categories: categories,
            properties: properties,
            filteredProperties: properties
        })

    }

    handleFilterClick = (key) => {
        console.log(key)
        if (key === ""){this.setState({filteredProperties: this.state.properties})}
        this.setState({filteredProperties: this.state.properties.filter((property) => (property.category === key))})
    }

    render() {

        return (
            <>
                <header>
                    <section className="container-fluid main-background">
                        <HeaderNavbar/>
                        <SearchBox/>
                    </section>
                </header>

                <section className="container-fluid">
                    <div className="row container propertyfilterparent justify-content-between">
                        <a
                            href="#"
                            className="current col-md propertyfilter text-center"
                            onClick={() => this.handleFilterClick("")}>
                            All
                        </a>
                        {
                            this.state.categories.map(category => (
                                <button
                                    className="current col-md propertyfilter text-center"
                                    onClick={() => this.handleFilterClick(category)}>
                                    {category}
                                </button>
                            ))
                        }
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row container takealook-title">
                        <div className="col-md ">
                            <h2>Private Rooms</h2>
                        </div>
                    </div>
                    <div className="row container">
                        {
                            this.state.filteredProperties.map((property, index) => (
                                <PropertyCard
                                    key={index}
                                    id={property.id}
                                    address={property.address}
                                    title={property.title}
                                    price={property.price}
                                    countBed={property.countBed}
                                    countSleep={property.countSleep}
                                    countBath={property.countBath}
                                    rentalParking={property.rentalParking}
                                    furnished={property.furnished}
                                    petsConsidered={property.petsConsidered}
                                    bgImgLink={property.bgImgLink}/>
                            ))
                        }
                    </div>

                </section>
            </>
        )
    }


}


export default PropertyListing