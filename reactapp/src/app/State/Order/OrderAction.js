import * as ActionTypes from "../actionTypes";

export function setOrder(order) {
   return{
    type: ActionTypes.ADD_ORDER_TOSTORE,
    payload: order
   }
}
export const removeOrder = (id) => ({
    type: ActionTypes.CANCEL_ORDER,
    payload: {
        id
    }
});

let saveOrderToDB = (order)=>{
    console.log("IN SAVE ORDER ACTION:ORDER ", order);

    return function (dispatch) {
        window.fetch("http://localhost:9000/order/saveOrder",{
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
let fetchOrders = ()=>{
    console.log("IN FETCH ORDER ACTION:ORDER ");

    return function (dispatch) {
        window.fetch("http://localhost:9000/order/getOrders",{
            method: 'GET', 
            
            
        })
        .then(orderresp => orderresp.json())
        .then (response => {
            console.log("response ", response);
            dispatch(setOrder(response))
        })
        .catch((err)=>{
            console.log("Error While fetching Order", err)
        })
    }
}


export { saveOrderToDB, fetchOrders};