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
        bgImgLink: "example1.jpg",
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
        bgImgLink: "example2.jpg",
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
        bgImgLink: "example3.jpg",
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
        bgImgLink: "example2.jpg",
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
        bgImgLink: "example1.jpg",
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
        bgImgLink: "example3.jpg",
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
        bgImgLink: "example2.jpg",
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
            selectedCategory: '',
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
        if (key === 'all'){
            const filteredProperties = {...this.state.properties}
            this.setState({filteredProperties: filteredProperties, selectedCategory: 'all'})
        }
        this.setState({filteredProperties: this.state.properties.filter((property) => (property.category === key))})
        this.setState({selectedCategory: key})
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
                        <button
                            className="current col-md propertyfilter text-center"
                            onClick={() => this.handleFilterClick('all')}>
                            All
                        </button>
                        {
                            this.state.categories.map((category, index) => (
                                <button
                                    key={index}
                                    className="current col-md propertyfilter text-center"
                                    onClick={() => this.handleFilterClick(category)}>
                                    {category}
                                </button>
                            ))
                        }
                    </div>
                </section>

                <section className="container-fluid">

                    <div className="row container property-list-tab-title">
                        <div className="col-md ">
                            <h2>{ this.state.selectedCategory === 'all' ? "All": this.state.selectedCategory }</h2>
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