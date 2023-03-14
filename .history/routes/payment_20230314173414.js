const express = require("express");
const {
  sendStripeKey,
  captureStripePayment,
} = require("../controllers/paymentController");
const { isLoggedIn } = require("../middlewares/user");
const router = express.Router();

router.route("/stripekey").get(isLoggedIn, sendStripeKey);
router.route("/stripecheckout").post(isLoggedIn, captureStripePayment);

module.exports = router;
