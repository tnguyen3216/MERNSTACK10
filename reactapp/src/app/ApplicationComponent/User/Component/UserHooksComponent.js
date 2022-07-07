import React, { Component, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";//replacement of mapStateToProps mapDispatchToProps

import { signinSignupUser } from "../../../State/User/UserActions";

let User = (props)=>{   

    //by using useRef we can create reference for html elements to be updated without adding state change
    //let refInput = react.createRef()
    // creating inputs with the help of ref keyword with userRef function
    let inputUserName = useRef(null);
    let inputPassword = useRef(null);
    let inputMobile = useRef(null);
    let inputStreet = useRef(null);

    //useSelector allows to subscribe from store (here reading user data)
    let user = useSelector((state)=>state.userReducer.user);
    
    //userName = userObject.userName; // we can't do it as rendering is not done yet so no access to html element

    //a hook that here gets called on first render - shouldComponentUpdate, we can access the view and assign the value to it
    useEffect(()=>{
        inputUserName.current.value = user.userName;//
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;

        //if we return a callback function, it will be working as componentWillUnmount
        return ()=>{
            console.log("User Component is un mounted - we can do cleaning of subscriptions like clearinterval")
        }
    })

    //ComponentDidMount - once we initilize the value in second parameter
    // useEffect((user)=>{
    //     //console.log(user)        
    //     inputUserName.current.value = user.userName;        
    //     inputPassword.current.value = user.password;
    //     inputStreet.current.value = user.street;
    //     inputMobile.current.value = user.mobile;
    // },{user}) 

    //in place of mapDispatch to props to publish the data to store we are using - useDispatch
    let dispatchToSaveUser = useDispatch();

    //console.log(userObject)
    let readFormData = (evt)=>{
        // `current` points to the mounted text input element
        
        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value
        }
       // alert("User Object :" + JSON.stringify(userObj))

        //dispatching sigin method which will further dispatch addUser action to store
        dispatchToSaveUser(signinSignupUser(userObj))

        evt.preventDefault();
    }

    return(
        <>
            <h1>User Component</h1>

            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} 
                        placeholder="Please enter user name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} 
                            placeholder="Please enter password" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} 
                            placeholder="Please enter address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} 
                            placeholder="Please enter mobile" />
                </label>                

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </>
    )
    
}


export default User;