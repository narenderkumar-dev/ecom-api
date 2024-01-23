const express = require("express")
const router = express.Router();

// const cartItemController = require("../controller/cartItem.controller");
const {updateCartItem,removeCartItem} = require("../controller/cartItem.controller");
const {authenticate} = require("../middleware/authenticate");

router.put("/:id",authenticate,updateCartItem);
router.delete("/:id",authenticate,removeCartItem);

module.exports=router;