import React from "react";
import queryString from 'query-string'

import HeaderNavbar from "../../components/layout/HeaderNavbar";
import SearchBox from "../../components/layout/SearchBox";
import PropertyCard from "../../components/sections/PropertyCard";
import {Spinner} from "react-bootstrap";
import {connect} from "react-redux";
import {propertyAction} from "../../redux/actions/property.actions";


class PropertyListing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            activeCategory: 'all',
            categories: [],
            properties: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.setState({loading: true})
        this.props.getAllProperties()
        this.props.getAllCategories()
        this.setState({loading: false})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("============nextProps=========", nextProps)
        this.setState({properties: nextProps.property.items}, () => {
            console.log('this.state', this.state)
        });
        this.setState({categories: nextProps.property.categories})
    }

    updateQueryString(newValues) {
        let currentQS = queryString.parse(this.props.location.search);
        let newQS = {...currentQS, ...newValues};
        this.props.history.push("/property/?" + queryString.stringify(newQS));
        return newQS
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        let currentQS = queryString.parse(this.props.location.search);
        let oldQS = queryString.parse(prevProps.location.search);

        let areSameObjects = (a, b) => {
            if (Object.keys(a).length !== Object.keys(b).length) return false;
            for (let key in a) {
                if (a[key] !== b[key]) return false;
            }
            return true;
        }

        if (!areSameObjects(currentQS, oldQS)) {
            this.props.getFilteredProperties(currentQS)
        }
    }

    handleFilterClick = (key) => {
        if (key === 'all') {
            this.props.getAllProperties()

        } else {
            this.updateQueryString({category: key})
        }
        this.setState({activeCategory: key})
    }

    render() {
        const {properties, categories} = this.state;

        if (this.state.loading) {
            return (<Spinner animation="border"/>)
        }

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


                        {
                            categories && ['all', ...categories].map((category, index) => (
                                <button
                                    key={index}
                                    className={this.state.activeCategory === category ? 'col-md propertyfilter text-center activeTab' : 'col-md propertyfilter text-center'}
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
                            <h2>{this.state.activeCategory.charAt(0).toUpperCase() + this.state.activeCategory.slice(1)}</h2>
                        </div>
                        <hr className="border1"/>
                    </div>

                    <div className="row container">
                        {
                            properties && properties.map((property, index) => (
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


const mapStateToProps = state => {
    const { property } = state;
    return {
        property
    }
}

const mapDispatchToProps = dispatch => ({
    getAllProperties: () => dispatch(propertyAction.getAllProperties()),
    getAllCategories: () => dispatch(propertyAction.getAllCatetories()),
    getFilteredProperties: (terms) => dispatch(propertyAction.getFilteredProperties(terms))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListing);
