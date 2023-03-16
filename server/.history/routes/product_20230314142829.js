const express = require("express");
const router = express.Router();
const {
  productTest,
  addProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/productController");
const { customRole, isLoggedin } = require("../middlewares/customer");

router.route("/producttest").get(productTest);
router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getSingleProduct);

// Admin Routes

router
  .route("/admin/product/add")
  .post(isLoggedin, customRole("admin"), addProduct);

module.exports = router;
