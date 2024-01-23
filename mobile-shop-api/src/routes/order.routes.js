const express = require("express")
const router = express.Router();

// const orderController = require("../controller/order.controller")
const {authenticate} = require("../middleware/authenticate")
const {createOrder,orderHistory,findOrderById} = require("../controller/order.controller")

router.post("/",authenticate,createOrder);
router.get("/user",authenticate,orderHistory);
router.get("/:id",authenticate,findOrderById);

module.exports=router;