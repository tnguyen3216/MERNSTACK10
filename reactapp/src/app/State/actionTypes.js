//This file contains the name of action types that we will use in reducers 

//User State
export const addUserToStore = "User.AddToStore";

//Product
export const saveProduct = "SAVE_PRODUCT";
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";

export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";

export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

export const ADD_PRODUCT_TOCART = "CART.ADD_PRODUCT_TOCART";
export const ADD_PRODUCT_REVIEW_TOSTORE = "PRODUCT.ADD_PRODUCT_REVIEW_TOSTORE";


//For Cart //action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//for Coupon
export const ADD_COUPON_TOSTORE = "COUPON.ADD_COUPON_TOSTORE"

//for ORder
export const ADD_ORDER_TOSTORE ="ORDER.ADD_ORDER_TOSTORE"
export const CANCEL_ORDER ="ORDER.CANCEL_ORDER"
export const ADD_CANCELED_ORDER_TOSTORE = "CANCELEDORDER.ADD_CANCELED_ORDER_TOSTORE"
export const ADD_REVIEW_ORDER_TOSTORE = "REVIEWORDER.ADD_REVIEWORDER_TOSTORE"

//for notifications
export const ADD_NOTIFICATION_TOSTORE ="NOTIFICATION.ADD_NOTIFICATION_TOSTORE"
export const REMOVE_NOTIFICATION ="NOTIFICATION.REMOVE_NOTIFICATION"