const express = require("express");
const router = express.Router();

const {
  capturePayment,
  stripeWebhook,
  handleStripeWebhook,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);
router.route("/webhook").post(handleStripeWebhook);
module.exports = router;
