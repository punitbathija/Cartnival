const express = require("express");
const router = express.Router();
const {
  sendStripeKey,
  captureStripePayment,
  capturePayment,
  buyNowButton,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);

module.exports = router;
