const express = require("express")
const router = express.Router();

const {getAllProducts,findProductById} = require("../controller/product.controller");
const {authenticate} = require("../middleware/authenticate");

router.get("/",authenticate, getAllProducts);
router.get("/id/:id",authenticate,findProductById);

module.exports = router;
