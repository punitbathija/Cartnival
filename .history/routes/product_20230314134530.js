const express = require("express");
const router = express.Router();
const { productTest } = require("../controllers/productController");
const { customRole, isLoggedin } = require("../middlewares/customer");

router.route("/producttest").get(productTest);

// Admin Routes

router
  .route("/admin/product/add")
  .post(isLoggedin, customRole("admin"), addProduct);

module.exports = router;
