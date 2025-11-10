const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");


const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:String,
        default:false,
    }
})

userSchema.pre('save',async function(next){
    const user=this;
    if(!this.isModified("password")){
        next();
    }

    try {
        const saltrounds=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,saltrounds);
        user.password=hash_password;
        next();
    } catch (error) {
        next(error);
    }
})
const User=new mongoose.model("User",userSchema)

module.exports=User;