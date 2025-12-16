require("dotenv").config();
const { User } = require("../models/user-model");
const connectdb = require("./db");

const createAdmin = async () => {
  try {
    await connectdb();
    
    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin user already exists!");
      process.exit(0);
    }

    // Create admin user
    const adminUser = await User.create({
      username: "Admin",
      email: "admin@example.com",
      phone: "1234567890",
      password: "admin123",
      isAdmin: true
    });

    console.log("Admin user created successfully!");
    console.log("Email: admin@example.com");
    console.log("Password: admin123");
    console.log("Please change these credentials in production!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
};

createAdmin();