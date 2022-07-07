import * as ActionTypes from "../actionTypes";

export const addNotification = (message)=>{
    return {
        type : ActionTypes.ADD_NOTIFICATION_TOSTORE,
        payload : {message}
    }
}

export const removeNotification = (message) => ({
    type: ActionTypes.REMOVE_NOTIFICATION,
    payload: { message }
});