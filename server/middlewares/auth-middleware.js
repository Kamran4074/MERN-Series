const jwt = require("jsonwebtoken");
const {User} = require("../models/user-model");

const authMiddleware = async (req,res,next)=>{
    const token= req.header("Authorization");

    if(!token){
        return res.status(401).json({msg:"Unauthorized HTTP, Token not provided"})
    }

    // Remove "Bearer " prefix if present
    const jwtToken = token.replace("Bearer", "").trim();

    try {
        // Verify token
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        // Get user data from token
        const userData = await User.findOne({email: isVerified.email}).select({
            password: 0,
        });

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized. Invalid token."});
    }
};

module.exports = authMiddleware;