//we are validating schema here that we created in auth-validator.js with the help of zod in validator folder
const validate=(schema)=>async(req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const message=err.errors[0].message;
        console.log(message);
        res.status(400).json({msg:"Validation error",err});
    }
};

module.exports={validate};