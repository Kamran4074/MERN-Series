const Service = require("../models/service-model");

const services = async(req,res)=>{
    try {
        const response= await Service.find();

        if(response.length === 0){
            res.status(200).json({msg: [], message: "No services found"});
            return;
        }
        
        res.status(200).json({msg: response});

    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            message: "Failed to fetch services"
        });
    }
}

module.exports = services;