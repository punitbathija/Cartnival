const express = require("express");
const router = express.Router();

const {
  createOrder,
  getSingleOrder,
  getLoggedinCustomerOrders,
  adminGetAllOrders,
  adminUpdateOrder,
  adminDeleteOrder,
} = require("../controllers/orderController");

const { isLoggedin, customRole } = require("../middlewares/customer");

router.route("/order/create").post(isLoggedin, createOrder);
router.route("/myorders").get(isLoggedin, getLoggedinCustomerOrders);

// Admin routes

router.route("/order/:id").get(isLoggedin, customRole("admin"), getSingleOrder);
router
  .route("/allorders")
  .get(isLoggedin, customRole("admin"), adminGetAllOrders);
router
  .route("/markorder/order/:id")
  .post(isLoggedin, customRole("admin"), adminUpdateOrder);
router
  .route("/delete/order/:id")
  .delete(isLoggedin, customRole("admin"), adminDeleteOrder);
module.exports = router;
