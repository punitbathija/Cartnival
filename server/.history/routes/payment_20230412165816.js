const express = require("express");
const router = express.Router();

const {
  capturePayment,
  handleStripeWebhook,
  removeJsonParser,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");
const bodyParser = require("body-parser");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);
router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  removeJsonParser,
  handleStripeWebhook
);
module.exports = router;
