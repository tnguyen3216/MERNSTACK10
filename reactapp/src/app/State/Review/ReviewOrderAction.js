import * as ActionTypes from "../actionTypes";

export function addReviewOrder(order) {
   return{
    type: ActionTypes.ADD_REVIEW_ORDER_TOSTORE,
    payload: order
   }
}

export const updateProductReview = (itemId, userReview) => {
   console.log("IN UPDATE PRODUCT REVIEW ACTION: review ", JSON.stringify({itemId:itemId, userReview:userReview }));
   return function (dispatch) {
      window.fetch("http://localhost:9000/product/updateProduct",{
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      
          body: JSON.stringify({itemId:itemId, userReview:userReview })
      })
      .then(productresp => productresp.json())
      .catch((err)=>{
          console.log("Error While update Product", err)
      })
  }
}