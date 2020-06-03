import {propertyConstants} from '../actions/actionTypes';


export function currentProperty(state = {}, action) {
    switch (action.type) {
        case propertyConstants.GET_PROPERTY_DETAIL:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state
    }
}