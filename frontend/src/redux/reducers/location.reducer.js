import {locationConstants} from '../actions/actionTypes';


export function location(state = {}, action) {
    switch (action.type) {
        case locationConstants.GET_ALL_LOCATIONS:
            return {
                ...state,
                items: action.payload.items
            }

        default:
            return state
    }
}