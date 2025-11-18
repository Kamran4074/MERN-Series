const {Contact,contactSchema}=require("../models/contact-models"); //import Contact and contactSchema models 

const contactForm=async(req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({
            msg:"Contact form submitted successfully",
            contact:response
        });
    } catch (error) {
        return res.status(500).json({
            msg:"Contact form submission failed",
            error:error
        });
    }
}

module.exports={contactForm};