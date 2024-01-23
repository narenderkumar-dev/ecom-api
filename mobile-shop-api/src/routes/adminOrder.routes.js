const express = require("express")
const router = express.Router();

// const orderController = require("../controller/adminOrder.controller")
const {authenticate} = require("../middleware/authenticate")
const {getAllOrders,confirmedOrders,shippOrders,deliverOrders,canclledOrders,deleteOrders} = require("../controller/adminOrder.controller")

router.get("/", authenticate, getAllOrders);
router.put('/:orderId/confirmed', authenticate,confirmedOrders);
router.put('/orderId/ship',authenticate,shippOrders);
router.put('/orderId/deliver',authenticate,deliverOrders);
router.put('/orderId/cancel',authenticate,canclledOrders);
router.put('/orderId/delete',authenticate,deleteOrders);

module.exports = router;