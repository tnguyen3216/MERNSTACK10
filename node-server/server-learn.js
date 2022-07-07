console.log("Server Js is referenced!!")
let express = require("express");
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 

let app = express();//instantiating express application 

//mounting of express application
let adminApp = express(); //initialization of express admin application

// serve static files like images css using static middleware
//app.use("/static", express.static("public"))
app.use("/static", express.static("public"))

app.get("/",(req, res)=>{
    //req.body
    res.send("Toan's first api!!")
})

//passing information to api using query string
//http://localhost:9000/userQuery?name=Toan&age=19&session=restfulapi
app.get("/userquery",(req, res)=>{
    let queryStringObj = req.query;
    //console.log(req)
    res.json(queryStringObj)
})

//passing information to api using route param
//http://localhost:9000/userbyid/:id
app.get("/userbyid/:id/info",(req, res)=>{
    let routeParam = req.params["id"];

    let response =  routeParam >= 100 ? "User is present " : "User is not present";
    res.send(`<h1>${response}</h1>`);
})

app.get("/home",(req, res)=>{   
    res.sendFile(__dirname + "/public/index.html")
})

// app.get("/node-server/public/classic.js",(req, res)=>{   
//     res.sendFile(__dirname + "/public/classic.js")
// })

app.use("/admin",adminApp);

//http://localhost:9000/admin/helloadmin
adminApp.get("/helloadmin",(req, res)=>{
    res.send("Sending response from Admin app")
})

//wild card api or astrisk *
// app.get("*",(req, res)=>{   
//     console.log(__dirname )
//     console.log(__filename )
//     res.sendFile(__dirname + "/public/index.html")
// })

app.listen(port, ()=> console.log(`server is listing as port ${port}`))


//RESTFul API's
//Representational State Transfer
//Working on - HTTP/S 
//All of them will follow below verbs (http verbs)
//GET / GET (by id) - fetch the data (we should not save data)
//POST - to create data or save data
//PUT/UPDATE - to update the data
//PATCH - to update a specific field that needs to be updated(userid, session:"Express")
//DELETE - this is used to delete the record using ID