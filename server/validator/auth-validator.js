const {z} = require("zod");

//create schema for registration validation

const signupSchema =z.object({
    username: z
    .string({required_error:"Username is required"})
    .trim()
    .min(3,"Username must be at least 3 characters long")
    .max(30,"Username must be at most 30 characters long"),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email("Invalid email address"),

    phone: z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,"Phone number must be at least 10 digits")
    .max(15,"Phone number must be at most 15 digits"),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,"Password must be at least 6 characters long")
    .max(100,"Password must be at most 100 characters long"),
});

const loginSchema=z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email("Invalid email address"),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,"Password must be at least 6 characters long")
    .max(100,"Password must be at most 100 characters long"),
});

module.exports= {signupSchema,loginSchema};