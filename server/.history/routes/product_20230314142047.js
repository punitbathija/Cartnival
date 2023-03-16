const express = require("express");
const router = express.Router();
const {
  productTest,
  addProduct,
  getAllProducts,
} = require("../controllers/productController");
const { customRole, isLoggedin } = require("../middlewares/customer");

router.route("/producttest").get(productTest);
router.route("/get-all-products").get(getAllProducts);
// Admin Routes

router
  .route("/admin/product/add")
  .post(isLoggedin, customRole("admin"), addProduct);

module.exports = router;
