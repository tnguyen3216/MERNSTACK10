import * as actionTypes from "../actionTypes";

//reducer is where state changes happen
let INITIAL_STATE = {
    products:[],
    defaultProduct : {
        name : "Product Name",
        price : 2,
        desc : "Product Description",
        rating : "Product Rating"
    }
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    console.log("product Reducer", state, action);
    switch (action.type) {        
        
        case actionTypes.ADD_PRODUCTS_TOSTORE :
            console.log("STATE UPDATION")
            //..state - products[] and defaultProduct
            return { ...state, products : action.payload.product } //we update products and then retrun a new state

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}
