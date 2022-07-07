let express = require("express");
let adminRouter = express.Router({});
let adminDataModel = require("../dataModel/adminDataModel");

//localhost:9000/admin/saveadmin?name=toan&age=18&session=mongoose&address=somewhere on earth
adminRouter.get("/saveadmin",( req, res)=>{
    let query = req.query;
    console.log(query);
    let adminMongooseObj = new adminDataModel(query); // this wil map each query param to admin data model document and return mongoose object

    //using mongoose object we make a save call that is erro first callback
    adminMongooseObj.save((err, data)=>{
        if(err){
            console.log("err ", err )
            res.send("Error Occured while saving!")
        }else{
            //if data containe _id created by mongodb it means call is successful else we need to look for error
            res.send(data)
        }
    })
})

adminRouter.get("/allusers",( req, res)=>{
    
    //find query will fetch all the documents saved through adminDataModel
    adminDataModel.find((err, data)=>{
        if(err){
            console.log("err ", err )
            res.send("Error Occured while fetching!")
        }else{
            res.send(data)
        }
    })
})

module.exports = adminRouter;