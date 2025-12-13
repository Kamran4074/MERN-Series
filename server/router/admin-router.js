const express= require("express");
// const { getAllUsers } = require("../controllers/admin-controller");
// const { getAllContacts } = require("../controllers/admin-controller");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router= express.Router();

// router.route("/users").get(getAllUsers);
// router.route("/contact").get(getAllContacts);
router
    .route("/users") //get all user
    .get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router
    .route("/users/:id") //get single user
    .get(authMiddleware,adminMiddleware,adminController.getUserById);
router
    .route("/users/update/:id")
    .patch(authMiddleware,adminMiddleware,adminController.updateUserById);
router
    .route("/users/delete/:id")
    .delete(authMiddleware,adminMiddleware,adminController.deleteUserById);
router
    .route("/contact")
    .get(authMiddleware,adminMiddleware,adminController.getAllContacts);
router
    .route("/contact/delete/:id")
    .delete(authMiddleware,adminMiddleware,adminController.deleteContactById);
//authMiddleware to see weather user is loggedin or not
//adminMiddleware to see weather he is admin or not
//and third controller is a finction that is defined i  controller to do the work we want
module.exports = router;