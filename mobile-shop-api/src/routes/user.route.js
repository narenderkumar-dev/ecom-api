const express = require("express")
const router = express.Router();
const {getUserProfile,getAllUsers}= require("../controller/user.controller");

router.get("/profile",getUserProfile);
router.get("/",getAllUsers);

module.exports=router;