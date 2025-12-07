const express= require("express");
// const { getAllUsers } = require("../controllers/admin-controller");
// const { getAllContacts } = require("../controllers/admin-controller");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router= express.Router();

// router.route("/users").get(getAllUsers);
// router.route("/contact").get(getAllContacts);
router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router.route("/contact").get(authMiddleware,adminMiddleware,adminController.getAllContacts);

module.exports = router;