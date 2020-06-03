import { propertyConstants } from "./actionTypes/property.constants";
import { propertyDetail} from './_mockdb'


export const currentPropertyAction = {
    getPropertyDetail,
    getPropertyCalendar
}


function getPropertyDetail(id) {
    console.log('============current property id============',id)


    return {
        type: propertyConstants.GET_PROPERTY_DETAIL,
        payload: {
            ...propertyDetail
        }
    }
}

function getPropertyCalendar(id) {

}