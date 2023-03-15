const express = require("express");
const router = express.Router();

const {
  createOrder,
  getSingleOrder,
  getLoggedinCustomerOrders,
} = require("../controllers/orderController");
const { isLoggedin, customRole } = require("../middlewares/customer");

router.route("/order/create").post(isLoggedin, createOrder);

router.route("/myorders").get(isLoggedin, getLoggedinCustomerOrders);

// Admin routes

router.route("/order/:id").get(isLoggedin, customRole("admin"), getSingleOrder);

module.exports = router;
