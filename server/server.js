require("dotenv").config();
const express= require('express');
const app=express(); //create express application
const authRoute= require("./router/auth-router");
const contactRoute= require("./router/contact-router");//import contact router
const connectdb=require("./utils/db");
const {errorMiddleware}=require("./middlewares/error-middleware.js");

//middleware
app.use(express.json());//middleware to parse json data in request body 


app.use("/api/auth",authRoute); //auth routes are defined in auth-router.js
app.use("/api/form",contactRoute);  //contact routes are defined in contact-router.js

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