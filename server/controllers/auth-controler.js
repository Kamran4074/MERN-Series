const User=require("../models/user-model");
const bcrypt=require("bcryptjs");   

//Home route controller
const home= async(req,res)=>{
    try {
        res
            .status(200)
            .send("Server is running home route");
    } catch (error) {
        console.log("Auth-controller"+error);
    }
}

//User registration controller
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    return res.status(201).json({
      msg: "User registered successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error", error });
  }
};



//User login controller
const login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        const userExist=await User.findOne({email})
        if(!userExist){
            return res.status(400).json({message :"Invalid email or password"});
        }
        // const user= await bcrypt.compare(password,userExist.password);
        const user= await userExist.comparePassword(password);

        if(user){
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