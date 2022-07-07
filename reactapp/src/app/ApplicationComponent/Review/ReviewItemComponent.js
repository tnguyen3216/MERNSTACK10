import React ,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom';
import {updateProductReview} from "../../State/Review/ReviewOrderAction"
let ReviewItemComponent = (props)=>{
    let item= props.item;
    const [input, setInput] = useState("");
    let user = useSelector((state)=>state.userReducer.user);

    let dispatchToUpdate = useDispatch();
    let saveReview = (item, comment)=>{
        //dispatchtoupdateProduct
        //productId,  review : { // req.body}

        //productObj["review"] = req.body.review

        let userReview = {
            username: user.userName,
            userId: user._id,
            comment: comment

        }
        console.log("USERREVIEW:", userReview)

      
        dispatchToUpdate(updateProductReview(item._id, userReview));

   }
    return(
        
        <tr>
            <td>{item.name}</td>
            <td><textarea id = "comment"  value = {input} onInput={e=>setInput(e.target.value)}/></td>
            <td><button onClick ={()=>saveReview(item, input)}>Submit</button></td>
        </tr>
    )

}

export default ReviewItemComponent