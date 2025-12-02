
const express=require("express"); //import express because we are using express router
const router=express.Router(); //create router object
const {contactForm}=require("../controllers/contact-controller"); //import contactForm controller


router.route("/contact").post(contactForm);

module.exports=router;