const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/orderController");
const { isLoggedin } = require("../middlewares/customer");

router.route("/order/create").post(isLoggedin, createOrder);

module.exports = router;
