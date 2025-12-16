const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");
const jwt= require("jsonwebtoken");
const express = require('express');


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
        type:Boolean,
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
        console.log("Encrypting password"+error);
    }
});

//method to compare password
userSchema.methods.comparePassword= async function (password) {
    return bcrypt.compare(password,this.password);
}


//method to generate token
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn:"30d"
        }
    )
    } catch (error) {
        console.log("Fail to generate token"+error)
    }
}

const User=new mongoose.model("User",userSchema)
module.exports={User,userSchema};   //exporting both the model and the schema