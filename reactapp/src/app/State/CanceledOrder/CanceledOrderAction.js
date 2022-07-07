import * as ActionTypes from "../actionTypes";

export function setCanceledOrder(order) {
    return{
     type: ActionTypes.ADD_CANCELED_ORDER_TOSTORE,
     payload: order
    }
 }
let saveCanceledOrder = (order)=>{
    return function (dispatch) {
        window.fetch("http://localhost:9000/order/saveCanceledOrder",{
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
       // .then(orderresp => orderresp.json())
        .then (response => {
            console.log("response ", response);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            console.log("Error While Saving Order", err)
        })
    }
}
let fetchCanceledOrders = ()=>{
    console.log("IN FETCH ORDER ACTION:ORDER ");

    return function (dispatch) {
        window.fetch("http://localhost:9000/order/getCanceledOrders",{
            method: 'GET', 
            
            
        })
        .then(orderresp => orderresp.json())
        .then (response => {
            console.log("response ", response);
            dispatch(setCanceledOrder(response))
        })
        .catch((err)=>{
            console.log("Error While fetching Order", err)
        })
    }
}

export {saveCanceledOrder, fetchCanceledOrders}