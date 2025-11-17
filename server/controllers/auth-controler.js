const User=require("../models/user-model");
const bcrypt=require("bcryptjs");   

const home= async(req,res)=>{
    try {
        res
            .status(200)
            .send("Server is running home route");
    } catch (error) {
        console.log("Auth-controller"+error);
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

    const userCreated=await User.create({
        username,
        email,
        phone,
        password,
    });
    try {
        res.status(201).json
        ({
            msg:"User registered successfully",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString()
        });
    } catch (error) {
        res.status(500).json("Server err"+error);
    }
}


//User login controller
const login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        const userExist=await User.findOne({email})
        if(!userExist){
            return res.status(400).json({message :"Invalid email or password"});
        }
        const isPasswordMatch= await bcrypt.compare(password,userExist.password);
        if(isPasswordMatch){
            res.status(200).json
            ({
                msg:"Login successfully",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            });
        }
        else{
            res.status(400).json({message:"Invalid email or password"});
        }
    } catch (error) {
        res.status(500).json("Login Auth-controler "+error);
    }
}
module.exports={home,register,login};