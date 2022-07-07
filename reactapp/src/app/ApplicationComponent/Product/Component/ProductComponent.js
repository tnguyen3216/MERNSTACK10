import React, {useState} from 'react'
//import action
import {saveProduct} from "../../../State/Product/ProductAction"
import {useSelector, useDispatch} from "react-redux"
import DisplayProduct from './DisplayProduct'

export default function Product (props){


    //state set from productReducer 
    let defaultProduct = useSelector((state)=> state.productReducer.defaultProduct)//mapstate to props
        
    let dispatchToSave = useDispatch();
    
    //let [name, setName]= useState(defaultProduct.name);
   let [name, setName] = useState(defaultProduct.name);
   let [price, setPrice] = useState(defaultProduct.price);
   let [desc, setDesc] = useState(defaultProduct.desc);
   let [rating, setRating] = useState(defaultProduct.rating);


    let saveProductCLick = (evt)=>{
        let product = {name, price, desc, rating};
       // The app dispatches an action to the Redux store
        dispatchToSave(saveProduct(product));
    }
    
        return(
            <div>
            <h1>Product form</h1>
            <p>{name}</p>
            <form>
                <label>Product Name</label>
                <input type="text" className="name" value = {name} onChange={(evt)=>setName(evt.target.value)}  />

                <label>Product Price</label>
                <input type="text" className="price" value = {price} onChange={(evt)=>setPrice(evt.target.value)}  />

                <label>Product Description</label>
                <input type="text" className="desc" value = {desc} onChange={(evt)=>setDesc(evt.target.value)}  />

                <label>Product Rating</label>
                <input type="text" className="rating" value ={rating} onChange={(evt)=>setRating(evt.target.value)} />
                {/* on click dispatch save product action */}
                {/* Something happens in the app, such as a user clicking a button */}
                <input type ="submit" onClick={saveProductCLick}/> 
            </form>
            <DisplayProduct/>
        </div>)
    
}