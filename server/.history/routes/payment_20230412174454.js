const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Buffer } = require("buffer");

const { capturePayment } = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");
const bodyParser = require("body-parser");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);

module.exports = router;
