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
    return next(new CustomError("images are required", 401));
  }

  if (req.files) {
    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.v2.uploader.upload(
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

  req.body.photos = imageArray;
  req.body.customer = req.customer.id;

  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getAllProducts = BigPromise(async (req, res, next) => {
  const allProducts = await Product.find();

  let products = allProducts;
  res.status(200).json({
    success: true,
    products,
  });
});

exports.getSingleProduct = BigPromise(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new CustomError("There are no matching products", 401));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

exports.adminModifyProduct = BigPromise(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  let imageArray = [];

  if (!product) {
    return next(new CustomError("There are no matching products", 401));
  }

  if (req.files) {
    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.v2.uploader.destroy(
        product.photos[index].id
      );
    }

    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.v2.uploader.upload(
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
    req.body.photos = imageArray;

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  }
});

exports.adminDeleteProduct = BigPromise(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new CustomError("There are no matching products", 401));
  }
  for (let index = 0; index < product.photos.length; index++) {
    await cloudinary.v2.uploader.destroy(product.photos[index].id);
  }

  await product.deleteOne();

  res.status(200).json({
    product,
    success: true,
    message: "The following product was Deleted",
  });
});

exports.addReview = BigPromise(async (req, res, next) => {
  const { rating, comment } = req.body;

  const review = {
    customer: req.customer._id,
    name: req.customer.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(req.params.id);

  const previousReview = product.reviews.find(
    (rev) => rev.customer.toString() === req.customer._id.toString()
  );

  if (previousReview) {
    product.reviews.forEach((review) => {
      if (review.customer.toString() === req.customer._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numberOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Review successfully added or modified",
  });
});

exports.deleteReview = BigPromise(async (req, res, next) => {
  const { productId } = req.params.id;

  const product = await Product.findById(productId);

  const reviews = product.reviews.filter(
    (rev) => rev.customer.toString() === req.customer._id.toString()
  );

  const numberOfReviews = reviews.length;

  const ratings = (product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length);

  await Product.findByIdAndUpdate(
    productId,
    {
      reviews,
      ratings,
      numberOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Review successfully deleted",
  });
});

exports.getReviewsForProduct = BigPromise(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});
