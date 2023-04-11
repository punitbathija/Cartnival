const express = require("express");
const router = express.Router();
const {
  capturePayment,
  stripeWebhook,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);
router.route("/webhook").post(stripeWebhook);

module.exports = router;
