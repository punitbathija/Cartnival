const express = require("express");
const router = express.Router();

const {
  capturePayment,
  stripeWebhook,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");
const bodyParser = require("body-parser");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);
router.route("/webhook", bodyParser.raw({ type: "*/*" })).post(stripeWebhook);

module.exports = router;
