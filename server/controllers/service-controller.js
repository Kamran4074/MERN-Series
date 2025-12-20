const Service = require("../models/service-model");


const services = async(req,res)=>{
    try {
        console.log("Fetching services from database...");
        const response= await Service.find();

        if(response.length === 0){
            console.log("No services found in database");
            res.status(200).json({msg: [], message: "No services found"});
            return;
        }
        
        console.log(`Found ${response.length} services`);
        res.status(200).json({msg: response});

    } catch (error) {
        console.error(`Services error: ${error.message}`);
        console.error("Full error:", error);
        res.status(500).json({
            error: "Internal server error",
            message: "Failed to fetch services"
        });
    }
}

module.exports = services;