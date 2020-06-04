import { locationConstants } from './actionTypes/location.constants'
import { locations } from "./_mockdb";


export const locationAction = {
    getAllLocations,
    getLocationDetail,
}


function getAllLocations() {
    return {
        type: locationConstants.GET_ALL_LOCATIONS,
        payload: {
            items: locations,
        }
    }
}

function getLocationDetail() {
    return {
        type: locationConstants.GET_LOCATION_DETAIL,
        payload: {

        }
    }
}

