const express= require('express');
const app=express();
const router= require("./router/auth-router");

app.use("/api/auth",router)




// app.get("/home",(req,res)=>{
//     res.status(200).send("Server is running");
// })

// app.get("/register",(req,res)=>{
//     res.status(200).send("Register Route");
// })

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`)
})