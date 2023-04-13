const express = require("express");
const router = express.Router();

const { capturePayment } = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);

module.exports = router;
