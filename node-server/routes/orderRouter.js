let express = require("express");
let router = express.Router({});

let OrderDataModel = require("../dataModel/orderDataModel")

router.post("/saveOrder", (req,res)=>{
    let orderDataModelObj = new OrderDataModel(req.body);
    
    orderDataModelObj.save((err, order)=>{
        if (err) {
            console.log("errr ", err);
        } else {
            res.send(order)
        }
    })
})
router.get("/getOrders", (req, res)=>{
    OrderDataModel.find((err,orders)=>{
       if (err) {
           res.send("Error in getting orders");
       } else {
           res.send(orders);
       }
    })
   })
router.delete("/removeOrder", (req,res)=>{
  
    let orderId = req.body.canceledOrder[0]._id;
    OrderDataModel.deleteOne({_id:orderId}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
 
})
module.exports = router;