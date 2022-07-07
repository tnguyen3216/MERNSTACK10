import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchOrders} from "../../State/Order/OrderAction"
import DisplayEachOrder from "./DisplayEachOrder"
let OrderComponent = (props)=>{
    let orders = useSelector((state)=>state.orderReducer);
    console.log("**LIST OF ORDERS:", orders);
    let fetchDispatch = useDispatch();

    useEffect(()=>{        
        fetchDispatch(fetchOrders())
    },[])

    

    return(
        <>
            <h1>Recent Orders</h1>
            <table>
                <tr>
                    <th>Order</th>
                    <th>Date ordered </th>
                </tr>
                <tbody>
                 {
                   orders.length >=1?
                    orders.map((order)=>{
                        return <DisplayEachOrder order={order} canceled={false}/>
                    })
                    :"No orders presented"                 }
                </tbody>
            </table>
        </>
    )
}

export default OrderComponent;