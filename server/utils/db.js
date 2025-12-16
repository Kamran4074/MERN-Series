const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

// const URI= "mongodb://127.0.0.1:27017/mern_admin"
const URI= process.env.MONGODB_URI;

const connectdb=async()=>{
    try {
        console.log(URI);
        
        await mongoose.connect(URI);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Failed to connect to database",error);
        process.exit(0);
    }
}

module.exports=connectdb;