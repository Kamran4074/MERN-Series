const mongoose = require("mongoose");
const {Schema} = mongoose;

const contactSchema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:false},  
    message:{type:String,required:false},
}) 

//create model or collection in database
const Contact = mongoose.model("Contact",contactSchema); 

//model name is Contact and schema is contactSchema
module.exports={Contact,contactSchema};