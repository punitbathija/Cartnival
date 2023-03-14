const express = require("express");
const router = express.Router();
const { isLoggedin, customRole } = require("../middlewares/customer");

const { createOrder } = require("../controllers/orderController");

router.route("/order/create").post(isLoggedin, createOrder);
