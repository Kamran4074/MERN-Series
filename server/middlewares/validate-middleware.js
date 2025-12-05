const e = require("express");

//we are validating schema here that we created in auth-validator.js with the help of zod in validator folder
const validate=(schema)=>async(req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const status=422;
        const message="fill input properly"
        const extraDetails=err.issues[0].path[0] + " " + err.issues[0].message; 
        //path[0] is the field that is invalid and message is the error message

        const error={ 
            status, 
            message,
            extraDetails
        }
        console.log(error);
        // res.status(400).json({msg:"Validation error",err}); 
        // we don't need this line because we are passing the error to error handling middleware
        next(error);
    }
};

module.exports={validate};

//all err caught here and that come form auth-validator and go to error middleware