const express = require("express")
const router = express.Router();

// const {createdProduct,createMultipleProduct,deleteProduct,updateProduct}= require("../controller/product.controller")
const productController= require("../controller/product.controller")

const {authenticate} = require("../middleware/authenticate")


router.post("/",authenticate,productController.createdProduct);
router.post("/creates",authenticate, productController.createMultipleProduct);
router.delete("/:id",authenticate, productController.deleteProduct);
router.put("/:id",authenticate,productController.updateProduct);

module.exports=router;