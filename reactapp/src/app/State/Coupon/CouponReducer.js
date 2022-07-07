import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    coupon: ""
}

export default function CouponReducer(state=INITIAL_STATE, action)
{
    console.log("INSDE_COUPON_REDUCER:", state, action);
    switch(action.type){
        case actionTypes.ADD_COUPON_TOSTORE :
            console.log("INSIDE COUPON_REDUCER: STATE",state)  
            console.log("INSIDE COUPON_REDUCER: AACTION.PAYLOAD",action.payload);  
            return {...state, coupon : action.payload};  
        
        default:  
            return state  
    }
    

}