const express = require("express");
const router = express.Router();

const {
  capturePayment,
  handleStripeWebhook,
} = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleStripeWebhook
);
module.exports = router;
