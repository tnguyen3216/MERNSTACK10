import React, { useState  } from "react";
import {useDispatch,useSelector} from "react-redux"
import DisplayItemsFromEachOrder from "./DisplayItemsFromEachOrder";
import { saveCanceledOrder} from "../../State/CanceledOrder/CanceledOrderAction"
import {removeOrder} from "../../State/Order/OrderAction"
import {addItemToCart} from "../../State/Cart/CartAction"
import {useNavigate} from "react-router-dom"
import {addReviewOrder} from "../../State/Review/ReviewOrderAction"
import { addNotification } from "../../State/Notification/NotificationAction";
let DisplayEachOrder = (props)=>{
   // let [showHide, toggleShowHide] = useState(false)
    let order = props.order;
    //console.log("INSIDE IDSPLAY EACHORDER:", order)
    let isCanceledOrder = props.canceled;
    console.log("ISCANCLED:", isCanceledOrder);

    let user = useSelector((state)=>state.userReducer.user)
    //console.log("USER ID: ", user._id);
    let orderExpired = (date)=>{
      
        var today = new Date();
      //  console.log("TODAY:", today)
        var orderDate = new Date(date);
        //console.log("DATE:", orderDate)
        
        var difference= (today.getTime() - orderDate.getTime())/(1000*3600);
        //console.log("TIME DIFFERENCE IN HOURS:", difference)

        return (difference>5)
        
    }
    let dispatchToCancelOrder = useDispatch();
    let dispatchToRemove = useDispatch();
    let dispatchToAddNoti = useDispatch();

    let cancelOrder = (order)=>{
      
        dispatchToRemove(removeOrder(order._id))
        let cancelOrder = {
            userId: order.userId,
            canceledOrderId:order._id,
            canceledOrder: order.cart,
            date: order.date
        }
        dispatchToCancelOrder(saveCanceledOrder(cancelOrder));
        
        let message = "You canceled order: "+ order._id;
        dispatchToAddNoti(addNotification(message));
    }

    let dispatchToReorder= useDispatch();
    let reorder =(order)=>{
   
        console.log("ORDER CART:", order.canceledOrder)
        for(const item of order.canceledOrder){
            console.log("ITEM:", item)
            dispatchToReorder(addItemToCart(item))
        }

    }
   let dispatchToReview = useDispatch();
   let navigate = useNavigate();     
        

    let review = function(order) {      
        
        dispatchToReview(addReviewOrder(order))
        navigate('/review');
    }
   
    return(
        <tr>
                <td>
                {
                    isCanceledOrder?
                    order.canceledOrder.map(item=>{
                        return (
                            <DisplayItemsFromEachOrder item={item} />
                        )
                    })
                    :
                       order.cart.map(item=>{
                            return (
                                <DisplayItemsFromEachOrder item={item} />
                            )
                        })
                        
                   
                         
                 }
                </td>
                <td>
                
                     {order.date}
                    
                   
                </td>
                <td>{
                
                    !isCanceledOrder ?
                        !orderExpired(order.date)?
                        <button  onClick={()=>cancelOrder(order)} >Cancel Order</button>
                        :<button  onClick={()=>review(order)} >Review</button>
                    : <button  onClick={()=>reorder(order)} >Buy Again</button>
                
                }
                </td>
            </tr>
    )

}

export default DisplayEachOrder;
