import * as actionTypes from "../actionTypes";

let INITIAL_STATE = [];

export default function CanceledOrderReducer(state = INITIAL_STATE, action){
    

    switch(action.type){
        
        case  actionTypes.ADD_CANCELED_ORDER_TOSTORE :
            return   action.payload  //we update products and then retrun a new state

        

        default:
            return state;
    }
}