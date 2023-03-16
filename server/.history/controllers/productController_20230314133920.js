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

exports.addProduct = BigPromise(async (req, res, next) => {
  let imageArray = [];
  if (!req.files) {
    return next(new CustomError("Please enter images for the product"));
  }

  if (req.files) {
    for (let index = 0; index < req.files.photos.length; index++) {
      let result = cloudinary.v2.uploader.upload(
        req.files.photos[index].tempFilePath,
        {
          folder: "products",
        }
      );

      imageArray.push({
        id: result.public_id,
        secure_url: result.secure_url,
      });
    }
  }
});
