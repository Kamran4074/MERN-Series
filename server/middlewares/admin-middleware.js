const adminMiddleware = (req,res,next)=>{
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole) {
            res.status(403).json({message:"Access denied. User is not Admin"})
        }

        //if user is an admin then proceed to next middleware
        next();
    } catch (error) {
        next(error);
    }
}

module.exports= adminMiddleware;