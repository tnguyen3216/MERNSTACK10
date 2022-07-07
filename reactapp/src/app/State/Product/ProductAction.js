import * as ActionTypes from "../actionTypes";

//action creator 

export function setProduct(product) {
    console.log("FROM PRODUCT_ACTOIN:");
    return{
    type: ActionTypes.ADD_PRODUCTS_TOSTORE,
    payload: {product}
    }


} 

export const saveProduct = (product)=>{
   

    return function (dispatch) {
        window.fetch("http://localhost:9000/product/saveProduct",{
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json())
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const fetchProducts = ()=>{
    console.log("Product ");

    return function (dispatch) {
   

        window.fetch("http://localhost:9000/product/getProducts",{
            method: 'GET'           
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("get products response ", productresp);
        
            dispatch(setProduct(productresp))
            
        })
        .catch((err)=>{
            console.log("Error While Fetching Product", err)
        })
    }
};