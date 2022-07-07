//import reducers, create store, import middle ware to make calls, combineReducer, export store
//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async
import promise from "redux-promise-middleware";//is used to make calls to the server using promise
//axios - another library to make server calls with async await

import userReducer from "./user/userReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer";
import couponReducer from "./Coupon/CouponReducer";
import orderReducer from "./Order/OrderReducer";
import canceledOrderReducer from"./CanceledOrder/CanceledOrderReducer"
import reviewOrderReducer from "./Review/ReviewOrderReducer"
import productReviewReducer from "./Product/ProductReviewReducer";
import notificationReducer from "./Notification/NotificationReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action);
    next(action); //move to the actual execution
};

//contains all states of all components from reducers . reducers contain state and logic to update state
export default createStore(
    combineReducers({
        userReducer,  
        productReducer,
        cartReducer,
        couponReducer,
        orderReducer,
        canceledOrderReducer,
        reviewOrderReducer,
        productReviewReducer,
        notificationReducer
    }),
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(logger, thunk, promise)
)



//state directory - represents everything that we need to implement for reducer to maintain data

//redux

//action creator - we refer to this event creator like event handles such button click, mouse hover etc...
//action - an object json {type : signinuser, payload : userObject} that contains, key value pair of actiontype (signin user) and payload (user object for user state)
//callback/reducer - a function which will generate new state for every action (action type), using the payload dispatched in action
//dispatch - we have a tightly coupled way of sending message to store for state update which passes through store by using dispatch method
//store - only one store is allowed in one application to maintain data, as one way flow

//react-redux
//this will provide us the access to store (redux) in react component, by using hooks or otherwise
// we need to bootstrap our application with react-redux Provider

//redux-thunk

//promise-middleware