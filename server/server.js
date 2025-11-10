require("dotenv").config();
const express= require('express');
const app=express();
const router= require("./router/auth-router");
const connectdb=require("./utils/db")

//middleware
app.use(express.json())

app.use("/api/auth",router)


// app.get("/register",(req,res)=>{
//     res.status(200).send("Register Route");
// })

const PORT=5000;

connectdb().then(()=>{})
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})