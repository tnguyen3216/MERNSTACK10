let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema
mongooseObj.connect("mongodb://127.0.0.1/mernstack10");

let OrderSchema = new schemaObj(
    {
        userId: {type: String, required :true},
        cart: Object,
        date: String

    }
)
let orderModel = mongooseObj.model('order',OrderSchema);

module.exports =orderModel