const express=require('express')
const router=express.Router();
// const {home,regester}=require("../controllers/auth-controler") or
const authrouter=require("../controllers/auth-controler")


router.route("/").get(authrouter.home);
router.route("/register").post(authrouter.register)

module.exports=router;
//we can also use router.route() method beause it helps in chaining multiple http methods.

// router.route("/register").get((req,res)=>{
//     res
//         .status(200)
//         .send("Register Route using route()");
// })

// app.get("/home",(req,res)=>{
//     res.status(200).send("Server is running");
// })
