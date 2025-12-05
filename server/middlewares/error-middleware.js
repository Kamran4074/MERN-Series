const errorMiddleware = (err,req,res,next)=>{
const status = err.status || 500;
const message = err.message || "Backend Error";
const extraDetails = err.extraDetails || "error from backend middleware";

return res.status(status).json({message,extraDetails})
}

module.exports={errorMiddleware};  
//errorMiddleware only validate email,name,phone etc only checek and send data on frontend