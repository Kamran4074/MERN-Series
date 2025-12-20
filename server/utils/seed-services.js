require("dotenv").config();
const mongoose = require('mongoose');
const Service = require('../models/service-model');

const URI = process.env.MONGODB_URI;

const sampleServices = [
    {
        service: "Web Development",
        description: "Full-stack web development using modern technologies like React, Node.js, and MongoDB",
        price: "$2000 - $5000",
        provider: "Kamronix Tech"
    },
    {
        service: "Mobile App Development",
        description: "Native and cross-platform mobile app development for iOS and Android",
        price: "$3000 - $8000",
        provider: "Kamronix Tech"
    },
    {
        service: "UI/UX Design",
        description: "Modern and user-friendly interface design with focus on user experience",
        price: "$500 - $2000",
        provider: "Kamronix Design"
    },
    {
        service: "Database Design",
        description: "Scalable database architecture and optimization for web applications",
        price: "$800 - $2500",
        provider: "Kamronix Data"
    },
    {
        service: "API Development",
        description: "RESTful API development and integration services",
        price: "$1000 - $3000",
        provider: "Kamronix API"
    },
    {
        service: "Cloud Deployment",
        description: "Deploy and manage applications on cloud platforms like AWS, Azure, or Google Cloud",
        price: "$300 - $1500",
        provider: "Kamronix Cloud"
    }
];

const seedServices = async () => {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(URI);
        console.log("Connected to database");

        // Clear existing services
        await Service.deleteMany({});
        console.log("Cleared existing services");

        // Insert sample services
        const result = await Service.insertMany(sampleServices);
        console.log(`Inserted ${result.length} services`);

        console.log("Sample services added successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding services:", error);
        process.exit(1);
    }
};

seedServices();