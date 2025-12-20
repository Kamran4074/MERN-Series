require("dotenv").config(); //for database
const express = require('express');
const cors = require("cors"); //cors for cross origin resource sharing
const mongoose = require('mongoose'); // Add mongoose import

const app = express(); //create express application

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");//import contact router
const serviceRoute = require("./router/service-router.js");
const adminRoute = require("./router/admin-router.js");

const connectdb = require("./utils/db");
const {errorMiddleware} = require("./middlewares/error-middleware.js");

const corsOptions = {
    origin: [
        process.env.CLIENT_URL || "http://localhost:5173",
        "https://servicehub-frontend.onrender.com",
        "http://localhost:5173"
    ],
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));

//middleware
app.use(express.json());//middleware to parse json data in request body

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || "development",
        database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
    });
});

// Root route for API
app.get("/", (req, res) => {
    res.json({
        message: "ServiceHub API is running!",
        frontend: process.env.CLIENT_URL || "https://servicehub-frontend.onrender.com",
        endpoints: {
            auth: "/api/auth",
            contact: "/api/form", 
            services: "/api/data",
            admin: "/api/admin"
        },
        environment: process.env.NODE_ENV || "development",
        timestamp: new Date().toISOString()
    });
}); 

app.use("/api/auth",authRoute); //auth routes are defined in auth-router.js
app.use("/api/form",contactRoute);  //contact routes is defined in contact-router.js
app.use("/api/data",serviceRoute); //service route is define in service-route.js

//lets define admin route
app.use("/api/admin",adminRoute); 

//we have to use error middleware at the end after all routes where connection is establishing
app.use(errorMiddleware);
    
const PORT = process.env.PORT || 5000;
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    });
}).catch((error)=>{
    console.log("Failed to start server:", error);
    process.exit(1);
});