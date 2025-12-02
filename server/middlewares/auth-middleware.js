const jwt = require("jsonwebtoken");
const {User} = require("../models/user-model");

const authMiddleware = async (req,res,next)=>{
    const token= req.header("Authorization");

    if(!token){
        //if you attempt to use an unauthorized token, you'll receive 401 error
        return res.status(401).json({msg:"Unauthorized HTTP, Token not provided"})
    }
    console.log("Token from auth middleware",token);

    // Remove "Bearer " prefix if present
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("Token from auth middleware:", jwtToken);

    try {
        // Verify token
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log("Token verified:", isVerified);

        // Get user data from token
        const userData = await User.findOne({email: isVerified.email}).select({
            password: 0, // Don't send password
        });

        console.log("User data:", userData);

        // Attach user data to request
        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized. Invalid token."});
    }
};

module.exports = authMiddleware;