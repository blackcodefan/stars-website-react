import { propertyConstants } from "./actionTypes/property.constants";
import { properties, categories } from './_mockdb'


export const propertyAction = {
    getAllProperties,
    getFilteredProperties,
    getAllCatetories,
}


function getAllProperties() {
    return {
        type: propertyConstants.GET_ALL_PROPERTIES,
        payload: {
            items: properties,
        }
    }
}

function getFilteredProperties(terms) {
    const { category } = terms
    console.log("=====================terms=================", terms  )
    return {
        type: propertyConstants.GET_FILTERED_PROPERTIES,
        payload: {
            items: properties.filter((property) => (property.category === category)),
        }
    }
}


function getAllCatetories() {
    return {
        type: propertyConstants.GET_PROPERTY_CATEGORIES,
        payload: {
            categories: categories
        }
    }
}