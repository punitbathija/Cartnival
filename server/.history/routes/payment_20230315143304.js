const express = require("express");
const router = express.Router();
const {
  sendStripeKey,
  captureStripePayment,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/stripekey").get(isLoggedin, sendStripeKey);
router.route("/stripecheckout").post(isLoggedin, captureStripePayment);

module.exports = router;
