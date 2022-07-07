let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack10"); //creates db with name mernstack8 or opens a connection if already present

//create schema
let UserSchema = new schemaObj({
    userName: {type:String, required:true},
    password: {type:String, required:true},
    street: String,
    mobile: Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});

//create model collection with name "user" that needs to follow scehma on line 7 
let UserModel = mongooseObj.model("user",UserSchema);
module.exports = UserModel;
//note: donot put versionkey to true or it will start throwing error