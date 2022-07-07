import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    reviewOrder:{}
}

export default function ReviewOrderReducer(state = INITIAL_STATE, action){
    console.log("***INSDE REVIEW_ORDER_REDUCER:")
    switch(action.type){
        case actionTypes.ADD_REVIEW_ORDER_TOSTORE:
            console.log("PaYLOAD:",action.payload)
            return  {...state, reviewOrder:action.payload}
        default:
            return state
    }
}