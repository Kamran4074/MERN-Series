const express=require('express');
const router=express.Router();
// const {home,regester}=require("../controllers/auth-controler") or
const authrouter=require("../controllers/auth-controler");
const {signupSchema,loginSchema}=require("../validator/auth-validator");
const {validate}=require("../middlewares/validate-middleware");
const authMiddleware=require("../middlewares/auth-middleware");


router.route("/").get(authrouter.home);
//validation middleware added here
router.route("/register").post(validate(signupSchema),authrouter.register);

router.route("/login").post(validate(loginSchema),authrouter.login);

//getting data of user to show on contact and auto fill email and user name in contact field
router.route("/user").get(authMiddleware,authrouter.user);

module.exports=router;
