let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack10");

//create schema
let ProductSchema = new schemaObj({
    name: String,
    price: String,
    desc: String,
    rating: Number,
    review: {type: Object, default: ""}
});
let productModel = mongooseObj.model('product',ProductSchema);

module.exports =productModel