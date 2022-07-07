import React, { useState } from "react";
import { useDispatch} from "react-redux"
import {addItemToCart, addProductAction} from "../../../State/Cart/CartAction"
import {addProductToReviewPage} from "../../../State/Product/ProductReviewAction"
import {useNavigate} from "react-router-dom"
let DisplayDetailedProduct = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAdd = useDispatch();
    
    let addProductToCart = (product)=>{
        //dispatch action to store
        dispatchToAdd(addItemToCart(product));

    }
    
    let dispatchToAddToReviewPage = useDispatch();
    let navigate = useNavigate();
    let showReview = (product)=>{
        dispatchToAddToReviewPage(addProductToReviewPage(product));
        navigate('/reviewproduct');
    }
    return(
        <ul className="product">
            <li className="product" onClick={(evt)=>{toggleShowHide(!showHide); evt.preventDefault()}}>
            {product.name}
            {showHide ?
                <ul >
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                    <button onClick={()=>{showReview(product)}}>Show Review</button>
                </ul>
            : <></>
            }
            </li>
        </ul>
    )

}

export default DisplayDetailedProduct;