let express = require("express");

let defaultRouter = express.Router();//options

defaultRouter.get("/",(req, res)=>{
    //req.body
    res.send("Toan's first api!!")
})

//passing information to api using query string
//http://localhost:9000/userQuery?name=Toan&age=19&session=restfulapi
defaultRouter.get("/userquery",(req, res)=>{
    let queryStringObj = req.query;
    //console.log(req)
    res.json(queryStringObj)
})

//passing information to api using route param
//http://localhost:9000/userbyid/:id/info
defaultRouter.get("/userbyid/:id/info",(req, res)=>{
    let routeParam = req.params["id"];

    let response =  routeParam >= 100 ? "User is present " : "User is not present";
    res.send(`<h1>${response}</h1>`);
})

defaultRouter.get("/home",(req, res)=>{   
    res.sendFile(__dirname + "../public/index.html")
})

//all will accept the request of all types - like get, put, post, patch and delete
defaultRouter.all("*",(req, res)=>{
    res.send("Responded from default in default route")
})

module.exports = defaultRouter;