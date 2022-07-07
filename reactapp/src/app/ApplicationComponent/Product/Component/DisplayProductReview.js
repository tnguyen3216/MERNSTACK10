import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux"


let DisplayProductReview = (props)=>
{
    let product = useSelector((state)=>  state.productReviewReducer.product);
    console.log("PRDUCT TO BE REVIEWED",product.review.length);
    return (
        <>
            <h1>Review for {product.name} </h1>
            { product.review.length>0 ?
                <table>
                    <tr>
                        <th>User</th>
                        <th>Comment</th>
                    </tr>
                {
                    product.review.map(eachReview=>{
                            return (
                                <>
                                    <tr>
                                        <td>{eachReview.username}</td>
                                        <td>{eachReview.comment}</td>
                                    </tr>
                                </>
                            )
                        })   
                }
            
                </table>:"No review found for this product"   
            }
        </>
    )
}

export {DisplayProductReview}