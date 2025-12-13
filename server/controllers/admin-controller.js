const {User} = require("../models/user-model");
const {Contact}= require("../models/contact-models")

//-------------------------
//to get user data to admin
//--------------------------
const getAllUsers=async(req,res,next)=>{
    try {
        const users = await User.find({},{password:0}); 
        //{},{password:0} bkz we dont want password
        console.log(users);
        if(!users || users.length===0){
            return res.status(404).json({message:"No User Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

//----------------------------------------
//to get single user data to admin(update)
//-----------------------------------------
const getUserById=async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0}) 
        // _id:id this mean if mongodb (_id) is match with our given(id) then delete it
        return res.status(200).json(data)
    } catch (error) {
        next("deleteUserById function error in admin-controller" `${error}`);
    }
}
//---------------------
//update user by admin
//---------------------
const updateUserById =async(req,res)=>{
    try {
        const id = req.params.id; //kiss id ko update karna hai
        const updatedUserData= req.body; //usme se kiss data se update karna hai

        const updatedData = await User.updateOne(
            {_id:id},
            {
                $set:updatedUserData
            })
            return res.status(200).json(updatedData);
    } catch (error) {
        next("updateUserById function error in admin-controller" `${error}`)
    }
}

//---------------------
//Delete user by admin
//---------------------
const deleteUserById= async(req,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id}) 
        // _id:id this mean if mongodb (_id) is match with our given(id) then delete it
        return res.status(200).json({message:"User deleted successfully"})
    } catch (error) {
        next("deleteUserById function error in admin-controller" `${error}`);
    }
}

//----------------------------
//to get contact data to admin
//----------------------------
const getAllContacts=async(req,res,next)=>{
    try {
        const contacts = await Contact.find();
        console.log(contacts);

        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No Contact Found"})
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
}

//------------------------
//Delete contact by admin
//------------------------
const deleteContactById= async(req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id}) 
        return res.status(200).json({message:"Contact deleted successfully"})
    } catch (error) {
        next("deleteContactById function error in admin-controller" `${error}`);
    }
}

module.exports={getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById};