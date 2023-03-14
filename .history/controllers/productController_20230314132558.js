const Product = require("../models/product");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");
const cloudinary = require("cloudinary");

exports.productTest = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is a test to check if product model is proper",
  });
};
