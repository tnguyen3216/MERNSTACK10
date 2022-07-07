let express = require("express");
let router = express.Router({});

let CanceledOrderDataModel = require("../dataModel/canceledDataModel")
let OrderDataModel = require("../dataModel/orderDataModel")
router.post("/saveCanceledOrder", (req,res)=>{
    let orderDataModelObj = new CanceledOrderDataModel(req.body);
    
    orderDataModelObj.save((err, order)=>{
        if (err) {
            console.log("errr ", err);
        } else {
            let orderId = req.body.canceledOrderId;
            console.log("ORDER ID:", orderId);
             OrderDataModel.deleteOne({_id:orderId}, function(err, result) {
                if (err) {
                    console.log("ERROR DELETING ORDER")
                } else {
                    //res.send(result);
                    console.log("SUCESSS")
                }
             });
         res.send(order)
        }
    })
})
router.get("/getCanceledOrders", (req, res)=>{
    CanceledOrderDataModel.find((err,orders)=>{
       if (err) {
           res.send("Error in getting orders");
       } else {
           res.send(orders);
       }
    })
   })
module.exports = router;