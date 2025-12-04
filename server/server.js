require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express(); //create express application
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");//import contact router
const serviceRoute = require("./router/service-router.js");
const connectdb = require("./utils/db");
const {errorMiddleware} = require("./middlewares/error-middleware.js");

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));

//middleware
app.use(express.json());//middleware to parse json data in request body 

app.use("/api/auth",authRoute); //auth routes are defined in auth-router.js
app.use("/api/form",contactRoute);  //contact routes are defined in contact-router.js
app.use("/api/data",serviceRoute)

//we have to use error middleware at the end after all routes where connection is establishing
app.use(errorMiddleware);
    
const PORT=5000;
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    });
}).catch((error)=>{
    console.log("Failed to start server:", error);
    process.exit(1);
});