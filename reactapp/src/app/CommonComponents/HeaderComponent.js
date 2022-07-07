import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect,useSelector, useDispatch } from "react-redux";
import {Dropdown, DropdownButton, Badge, ButtonGroup, Button} from "react-bootstrap"
import { removeNotification } from "../State/Notification/NotificationAction";

const DEFAULT_NOTIFICATION = {
   
    message: "default"
    
  };
let Header = (props)=>{

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    let userName = props.user && props.user.userName ? props.user.userName : ""; 

    let cartList = useSelector((state)=>state.cartReducer);
    let canceledOrder = useSelector((state)=>state.canceledOrderReducer);

    let notificationList = useSelector((state)=>state.notificationReducer);
    console.log("NOTIFICATION LIST:", notificationList);

    let dispatchToRemoveNoti = useDispatch();
    let removeNoti =(message)=>{
        dispatchToRemoveNoti(removeNotification(message));
    }
   
    //if(userName.length > 0)
    return(
        <>
            Hi <b>{userName}</b>, Welcome to SynergisticIT Shopping Cart <br/>
            <a id = "logout" href="#" onClick={(evt)=>{window.location.reload(false);}}> Log out</a>
            
            {/* <button className="button notification"  >Nofitication </button>  */}
            <div style={{ marginLeft: "90%" }}>
               
               
                <NavLink to="/cart"  activeclassname="success" >
                    <img style={{backgroundImage: "url(/images/logo_1.png)" }} width="30" height="30"/> {cartList.length} 
                </NavLink>
                
                <div>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Notification<Badge bg="secondary">{notificationList.messages.length}</Badge></Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.ItemText>Useful links</Dropdown.ItemText>
                            <Dropdown.Item href="/home">Home</Dropdown.Item>
                            <Dropdown.Item href="/product">Check out our products</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.ItemText>Notification</Dropdown.ItemText>
                            {
                                notificationList.messages.map(message=>{
                                    return (<Dropdown.Item onClick = {()=>removeNoti(message)}>{message}</Dropdown.Item>)
                                })
                            }
                    </Dropdown.Menu>
                 </Dropdown>
                    
                    
                </div>

               
             </div>
            
            
            
            
            
            
            <hr/>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            
            <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink>
            
            <NavLink to="/checkout" className="button" activeclassname="success" >Checkout </NavLink>
            <NavLink to="/coupon" className="button" activeclassname="success" >Coupon </NavLink>
            <NavLink to="/order" className="button" activeclassname="success" >Recent Orders </NavLink>
            <NavLink to="/canceledorder" className="button" activeclassname="success" >Canceled Orders </NavLink>
            {/* <button onClick={func}>Go To About</button> */}
        </>
    )
    // else
    // return(
    //     <>
    //         Hi <b>{userName}</b>, Welcome to SynergisticIT Shopping Cart 
    //         <hr/>
    //         <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
    //         <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
    //         <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            
        
    //     </>
    // )
}

let mapStateToProps = (state)=>{ //state is store
    return{
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);

//export default Header;


//create a class with your own name and implement all the component lifecyles