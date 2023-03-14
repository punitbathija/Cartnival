const express = require("express");
const {
  sendStripeKey,
  captureStripePayment,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");
const router = express.Router();

router.route("/stripekey").get(isLoggedin, sendStripeKey);
router.route("/stripecheckout").post(isLoggedin, captureStripePayment);

module.exports = router;
