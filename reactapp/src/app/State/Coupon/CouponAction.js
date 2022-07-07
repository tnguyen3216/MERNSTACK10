import * as ActionTypes from "../actionTypes";
export const addCoupon = (coupon)=>{
    return {
        type : ActionTypes.ADD_COUPON_TOSTORE,
        payload : coupon
    }
}