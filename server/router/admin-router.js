const express= require("express");
// const { getAllUsers } = require("../controllers/admin-controller");
// const { getAllContacts } = require("../controllers/admin-controller");
const adminController = require("../controllers/admin-controller");

const router= express.Router();

// router.route("/users").get(getAllUsers);
// router.route("/contact").get(getAllContacts);
router.route("/users").get(adminController.getAllUsers);
router.route("/contact").get(adminController.getAllContacts);

module.exports = router;