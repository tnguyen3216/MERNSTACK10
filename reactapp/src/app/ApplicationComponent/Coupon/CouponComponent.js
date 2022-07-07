import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate }  from "react-router-dom";
import {addCoupon} from "../../State/Coupon/CouponAction";
//reading from user reducer using react-redux hook - useSelector
//below code allows us the access of any store's state here is 


let CouponComponent = (props)=>{
    let coupon = useSelector((state) => state.couponReducer.coupon); //inside implements mapStateToProps for one state


    let dispatchCoupon = useDispatch(); // using this hook to dispatch the addCouponToStore action : publisher

    let generateCoupon= ()=>{
        let generatedValue = Math.floor(100000 + Math.random() * 900000);
        console.log(generatedValue);

        dispatchCoupon(addCoupon(generatedValue));
    }
    
    let navigate = useNavigate();
   
    let func = function(event) {      
        
        navigate('/checkout');
        event.preventDefault();
    }
    return(
        <>
            <h1>Coupon Page</h1>
            <p>Your Generated Coupon is : 
                    <b>{coupon}</b></p>
            
            <button onClick={generateCoupon}>Generate Coupon</button>
            <button onClick={func}>Go To Checkout</button>
        </>
    )
    
}

export default CouponComponent;