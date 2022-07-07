import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../State/Product/ProductAction";
import DisplayDetailedProduct from "./DisplayDetailedComponent";

let DisplayProduct = (props)=>{
    let dispatchToFetch = useDispatch();

    let productList = useSelector((state)=>state.productReducer.products)

    //dont need user interaction (click or sth)
    useEffect(()=>{        
        dispatchToFetch(fetchProducts())
    },[])

    console.log("productList ", productList)
    return(
        <>
            <h1>Below are products we can add to cart!!</h1>

            {productList && productList.length>0 ?
             productList.map(product=>{
                 return <DisplayDetailedProduct product={product} key={product._id}/>
             }):
             "No Product Found!!"
             }
        </>
    )
}


export default DisplayProduct;