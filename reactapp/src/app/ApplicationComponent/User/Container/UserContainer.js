//user Container is going to be the react-redux code => taking data from redux and passing it to react as props 
import { connect } from "react-redux";//allows us to connect with store we passed in provider component
import UserComponent from "../Component/UserComponent";

//import the action which will be dispatched to store => reducer
import { addUserAction, signinSignupUser } from "../../../State/User/UserActions";

//making component subcriber - mapStateToProps
let mapStateToProps = (state)=>{ //state is actually the store supplied in provider
    return { //we subscribe to the states we want to use in our component with the name props
        user : state.userReducer.user
    }
}

//making component publisher - mapdispatchToProps
let mapdispatchToProps = (dispatch)=>{ //dispatch is the only way to send action to store and then reducer
    return{
        addUser : (user)=>{ //we'll be able to access this method in component event to dispatch the action
            dispatch(addUserAction(user))
        },
        signInServer : (user)=>{
            dispatch(signinSignupUser(user))
        }
    }
}

//this makes sure that we are able to access user as props in UserComponent
export default connect(mapStateToProps, mapdispatchToProps)(UserComponent);