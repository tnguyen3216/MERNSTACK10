import React ,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom';
import DisplayItemsFromEachOrder from "../Order/DisplayItemsFromEachOrder";
import ReviewItemComponent from "./ReviewItemComponent"
let ReviewComponent = (props)=>{
   
   let reviewOrder = useSelector((state)=>state.reviewOrderReducer.reviewOrder)
   //console.log("REVIEW ORDER:", reviewOrder);

   
  
    return(
        <table>
            <tr>
                <th>Items</th>
                <th>Comment</th>
                <th>Submit</th>
            </tr>
            <>
            {
                 reviewOrder.cart.map(item=>{
                            return (
                               <ReviewItemComponent item={item} key={item._id} />
                            )
                        })
                
            }
           </>


        </table>
        )
}
export {ReviewComponent}