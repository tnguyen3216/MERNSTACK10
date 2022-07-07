let express = require("express");
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 

let cors = require("cors");

let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRoute");
//mounting of express application
let adminApp = express(); //initialization of express admin application
let adminRouter = require("./routes/adminRouter");

let userApp = express();
let userRouter = require("./routes/userRouter");

let productApp = express();
let productRouter = require("./routes/productRouter");

let orderApp = express();
let orderRouter = require("./routes/orderRouter");

let canceledOrderApp = express();
let canceledOrderRouter = require("./routes/canceledRouter")
app.use(cors()) //setting cross origin access to true in our express api's
// serve static files like images css using static middleware
//app.use("/static", express.static("public"))
app.use("/static", express.static("public"))

app.use(express.json({limit:'2mb', extended:false})); //json middle-ware for setting request content type to json in body

app.use("/admin", adminApp);
adminApp.use("/", adminRouter)

//user api
app.use("/user", userApp); //signin api path => localhost:9000/user/api/signinup
userApp.use("/", userRouter);

//product api
app.use("/product", productApp);
productApp.use("/", productRouter);

//order api
app.use("/order", orderApp);
orderApp.use("/", orderRouter);

//canceledOrder api
app.use("/order", canceledOrderApp)
orderApp.use("/", canceledOrderRouter)
app.use("/",defaultRouter);

app.listen(port, ()=> console.log(`server is listing as port ${port}`))