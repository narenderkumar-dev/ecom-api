const express = require("express")
const router = express.Router();

const {createRating,getAllRatings}= require("../controller/rating.controller");
const {authenticate} = require("../middleware/authenticate");

router.post("/create",authenticate,createRating);
router.put("/product/:productId",authenticate,getAllRatings);

module.exports = router;