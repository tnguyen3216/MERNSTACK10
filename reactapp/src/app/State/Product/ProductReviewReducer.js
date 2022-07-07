import * as actionTypes from "../actionTypes";


let INITIAL_STATE = {
   product : {
        

    }
}
export default function ProductReviewReducer(state=INITIAL_STATE, action)
{
   
    switch (action.type) {        
        
        case actionTypes.ADD_PRODUCT_REVIEW_TOSTORE :
           
            return { ...state, product : action.payload } //we update products and then retrun a new state


        default:
            return state;
    }
}