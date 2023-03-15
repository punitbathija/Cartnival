const express = require("express");
const router = express.Router();
const { sendStripeKey } = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/stripekey").get(isLoggedin, sendStripeKey);
module.exports = router;
