import { propertyConstants } from "./actionTypes/property.constants";
import { properties, propertyCategories } from './_mockdb'


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
            categories: propertyCategories
        }
    }
}