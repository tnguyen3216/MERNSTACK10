let express = require("express");
let router = express.Router({});

let ProductDataModel = require("../dataModel/productDataModel");

router.post("/saveProduct", (req, res)=>{
    let productDataModelObj = new ProductDataModel(req.body);
   productDataModelObj.save((err, product)=>{ 
       
        if (err) {
            console.log("errr ", err);
        } else {
            res.send(product)
        }
    })
})

router.post("/updateProduct", (req, res)=>{
    
    console.log("REQ BODY:", req.body);
   ProductDataModel.findOne({_id: req.body.itemId},(err, prodObj) => {
    if (err){
        console.log("got an error!", err);            
        res.send("error while update review!");
    }
    //if review match with current review 
    else if(prodObj.review == req.body.userReview){
        console.log("got an error!", err);            
        res.send("error while update review!");
    }
    //if no review for the product yet
     else if(prodObj.review === undefined){
        prodObj["review"] = [req.body.userReview]

        prodObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
    }
    else{ 
        prodObj["review"] = [...prodObj.review,req.body.userReview]

       prodObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }    
            setTimeout(()=>{
                res.json(data);
            },3000) 
        }); 
    }
    // prodObj.review === undefined

    // prodObj.review = req.body.review //error
    // prodObj["review"] = []

    // //if product doens't have review yet
    // prodObj["review"] = [req.body.review]
    
    //if product has reivews already then append new review
    // 
    
   })
})

router.get("/getProducts", (req, res)=>{
 ProductDataModel.find((err,products)=>{
    if (err) {
        res.send("Error in getting products");
    } else {
        res.send(products);
    }
 })
})
module.exports = router;

