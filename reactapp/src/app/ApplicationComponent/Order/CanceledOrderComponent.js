import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchCanceledOrders} from "../../State/CanceledOrder/CanceledOrderAction"
import DisplayEachOrder from "./DisplayEachOrder"
let canceledOrderComponent = (props)=>{
    let orders = useSelector((state)=>state.canceledOrderReducer);
    console.log("**LIST OF CANCELED ORDERS:", orders);
    let fetchDispatch = useDispatch();

    useEffect(()=>{        
        fetchDispatch(fetchCanceledOrders())
    },[])

    

    return(
        <>
            <h1>Canceled Orders</h1>
            <table>
                <tr>
                    <th>Order</th>
                    <th>Date canceled</th>
                </tr>
                <tbody>
                 {
                   orders.length >=1?
                    orders.map((order)=>{
                        return <DisplayEachOrder order={order} canceled={true} />
                    })
                    :"No orders presented"                 }
                </tbody>
                
            </table>
        </>
    )
}

export default canceledOrderComponent;