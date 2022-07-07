import React, { useState } from "react";


let DisplayItemsFromEachOrder = (props)=>{
    let item = props.item;
    //console.log("THE ORDER: ", theOrder.cart);
    return(
        <tr>
            <td>
                {item.name}
            </td>


        </tr>
        )




}

export default DisplayItemsFromEachOrder;