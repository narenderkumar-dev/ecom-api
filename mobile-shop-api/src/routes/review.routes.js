const express = require("express")
const router = express.Router();

const {createReview,getAllReview}= require("../controller/review.controller");
const {authenticate} = require("../middleware/authenticate");

router.post("/create",authenticate,createReview);
router.get("/product/:productId",authenticate,getAllReview);

module.exports = router;