import {propertyConstants} from '../actions/actionTypes';


export function property(state = {}, action) {
    switch (action.type) {
        case propertyConstants.GET_ALL_PROPERTIES:
            return {
                ...state,
                items: action.payload.items,
            };
        case propertyConstants.GET_FILTERED_PROPERTIES:
            return {
                ...state,
                items: action.payload.items,
            };
        case propertyConstants.GET_PROPERTY_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
            }
        default:
            return state
    }
}