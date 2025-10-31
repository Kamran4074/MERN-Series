const express=require('express')
const router=express.Router();


router.get("/home",(req,res)=>{
    res
        .status(200)
        .send("Server is running");
})

//we can also use router.route() method beause it helps in chaining multiple http methods.
router.route("/regerster").get((req,res)=>{
    res
        .status(200)
        .send("Register Route using route()");
})

module.exports=router;