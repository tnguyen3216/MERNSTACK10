let express = require("express");
let router = express.Router();

//model contains schema 
let UserDataModel = require("../dataModel/userDataModel");


//user signin signup api
router.post("/api/signinup", (req, res)=>{ //localhost:9000/user/api/signinup
    //req.body will have : userName, password, street, mobile


    //the UserDataModel can do CRUD methods
    //findone is like findany
    UserDataModel.findOne({userName : req.body.userName}, (err, userdata)=>{
        if(err){
            console.log("err ", err);
            res.send("Error Occured while fetching user")
        }
        else if(userdata) //if userdata is not null means user is present so send the user object back
        {
            res.send(userdata); //signin
        } 
        else //now is the case that user is coming for the first time so we need to create the user
        {
            let userDataModelObj = new UserDataModel(req.body);

            userDataModelObj.save((errr, newUser)=>{ //signup
                //newUser will containe _id from mongodb created by default
                if (errr) {
                    console.log("errr ", errr);
                    res.send("Error Occured while creating user entry")
                } else {
                    console.log("newUser ", newUser);
                    res.send(newUser)
                }
            })
        }
    })
});



module.exports = router;