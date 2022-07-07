import * as ActionTypes from "../actionTypes";

//action creator 

export function addProductToReviewPage(product) {
   
    return{
    type: ActionTypes.ADD_PRODUCT_REVIEW_TOSTORE,
    payload: product
    }


} 
