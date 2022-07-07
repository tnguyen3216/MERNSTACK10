import * as actionTypes from "../actionTypes";
let INITIAL_STATE ={
    messages:[]
}

export default function NotificationReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case actionTypes.ADD_NOTIFICATION_TOSTORE :
            
            return {...state, 
                messages :[...state.messages, action.payload.message]
            }
        case actionTypes.REMOVE_NOTIFICATION:
            
            return{
                ...state, messages: state.messages.filter(message =>message != action.payload.message)
            }
        default:  
            return state  
    }
}