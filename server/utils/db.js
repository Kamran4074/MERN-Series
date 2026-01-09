const mongoose = require('mongoose');

const URI= process.env.MONGODB_URI;

const connectdb=async()=>{
    try {
        if (!URI) {
            throw new Error("MONGODB_URI environment variable is not set");
        }
        
        await mongoose.connect(URI);
    } catch (error) {
        console.error("Failed to connect to database:", error.message);
        process.exit(1);
    }
}

module.exports=connectdb;