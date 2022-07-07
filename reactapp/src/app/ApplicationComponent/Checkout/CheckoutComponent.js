// 16-06-2022 - Practice
// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)
// Second Task :
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page

import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import CartSummaryComponent from "../Cart/CartSummaryComponent"
import {NavLink,useNavigate} from "react-router-dom";
import {saveOrderToDB} from "../../State/Order/OrderAction"
const makePaymentMessage = "Thank you for the payment, your items under process!"

let CheckoutComponent = (props)=>{
    let User = useSelector((state)=>state.userReducer.user)
   // console.log("***USER: ",User);

    let cartList = useSelector((state)=>state.cartReducer)
    //console.log("CARTLIST_FROM_CHECKOUT:" , cartList);

    let coupon = useSelector((state) => state.couponReducer.coupon);
   // console.log("COUPON_FROM_CHECKOUT", coupon);
    let [showHide, toggleShowHide] = useState(true)
    
    let saveOrderDispatch = new useDispatch();
    let saveOrderClick = (evt)=>{
        console.log("SAVE ORDER TO DB: ")
        toggleShowHide(false);
        
        
        let order = {
            userId: User._id,
            cart: cartList,
            date: new Date()

        }
        console.log("**ORDER:", order)
        //save order to db
        saveOrderDispatch(saveOrderToDB(order));

        
    }

    let navigate = useNavigate();
    let func = function(event) {      
        
        navigate('/cart');
        event.preventDefault();
    }
    let recalculate = (cartItems) => {
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }
    return(
        
        <>
            {showHide?
            <div>
                <h1> Checkout Page </h1>
                <p>We will deliver the products to the below address:</p>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
                <tr>
                <td>{User.userName}</td>
                <td>{User.street}</td>
                </tr>

                <h3>Your order details:</h3>
                <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartList.map(item=>{
                                    
                                        
                                        return (
                                            
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.price*item.qty}</td>
                                        </tr>
                                        )
                                    })
                                } 
                            </tbody>
                        </table>
                        <CartSummaryComponent data={recalculate(cartList)}/>

                         <h2>Coupon Number: {coupon}</h2>          
                        <button onClick={saveOrderClick}>Payment</button>
             </div>:
            <div>
                <h1>
                    {makePaymentMessage}
                </h1>
                
                    <button onClick={func} >
                        Go Back To Cart
                    </button>
                    <button onClick={()=>toggleShowHide(true)} >
                        Go To Checkout
                    </button>
                     
                
            </div>
                    
                
            }
        </>
    )
    
}
export default CheckoutComponent
