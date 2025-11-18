require("dotenv").config();
const express= require('express');
const app=express();
const router= require("./router/auth-router");
const connectdb=require("./utils/db");
const {errorMiddleware}=require("./middlewares/error-middleware.js");

//middleware
app.use(express.json());
app.use("/api/auth",router);

//we have to use error middleware at the end after all routes where connection is establishing
app.use(errorMiddleware);
    
const PORT=5000;
connectdb().then(()=>{})
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})