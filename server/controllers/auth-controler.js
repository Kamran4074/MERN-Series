const User=require("../models/user-model");
const bcrypt=require("bcryptjs");

const home= async(req,res)=>{
    try {
        res
            .status(200)
            .send("Server is running home route");
    } catch (error) {
        throw error;
    }
}

const register= async(req,res)=>{
    
    const{username,email,phone,password}= req.body;

    const userExist= await User.findOne({ email });

    if(userExist){
        return res.status(400).json("User already exists");
    }
    //hash password
    // const saltrounds=10;
    // const hash_password=await bcrypt.hash(password,saltrounds);


    const data=await User.create({username,email,phone,password:{select:false}});
    try {
        res
            .status(200).json({msg:data})
            .json({data});
    } catch (error) {
        res.status(500).json("Server Error");
    }
}

module.exports={home,register};