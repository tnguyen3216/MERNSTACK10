let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema
mongooseObj.connect("mongodb://127.0.0.1/mernstack10");

let OrderSchema = new schemaObj(
    {
        userId: {type: String, required :true},
        canceledOrderId: String,
        canceledOrder: Object,
        date: String

    }
)
let orderModel = mongooseObj.model('canceledOrder',OrderSchema);

module.exports =orderModel