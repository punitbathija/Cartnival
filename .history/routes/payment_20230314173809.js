const express = require("express");
const {
  sendStripeKey,
  captureStripePayment,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");
const router = express.Router();

router.route("/stripekey").get(isLoggedIn, sendStripeKey);
router.route("/stripecheckout").post(isLoggedIn, captureStripePayment);

module.exports = router;
