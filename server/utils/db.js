const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

// const URI= "mongodb://127.0.0.1:27017/mern_admin"
const URI= process.env.MONGODB_URI;

const connectdb=async()=>{
    try {
        console.log("Attempting to connect to MongoDB...");
        console.log("MongoDB URI exists:", !!URI);
        
        if (!URI) {
            throw new Error("MONGODB_URI environment variable is not set");
        }
        
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to database:", error.message);
        console.error("Full error:", error);
        process.exit(1);
    }
}

module.exports=connectdb;