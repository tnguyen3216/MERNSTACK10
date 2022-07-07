import * as actionTypes from "../actionTypes";

let INITIAL_STATE = [];

export default function OrderReducer(state = INITIAL_STATE, action){
    console.log("ACTION TYPE IN ORDER REDUCER:", action.type)
    console.log("ACTION PAYLOAD IN ORDER REDUCER:", action.payload)

    switch(action.type){
        
        case  actionTypes.ADD_ORDER_TOSTORE :
            return   action.payload  //we update products and then retrun a new state

            case actionTypes.CANCEL_ORDER:
                console.log("INSIDE ORDER REDUCER CANCEL ORDER")
                return state.filter(order => order._id!=action.payload.id)

        default:
            return state;
    }
}