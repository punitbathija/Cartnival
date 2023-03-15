const Order = require("../models/order");
const Product = require("../models/product");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utils/customError");

exports.createOrder = BigPromise(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    taxAmount,
    shippingAmount,
    totalAmount,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    taxAmount,
    shippingAmount,
    totalAmount,
    customer: req.customer._id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

exports.getSingleOrder = BigPromise(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "customer",
    "name email"
  );

  if (!order) {
    return next(new CustomError("Please enter correct order id", 401));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

exports.getLoggedinCustomerOrders = BigPromise(async (req, res, next) => {
  const order = await Order.find({ customer: req.customer._id });

  if (!order) {
    return next(new CustomError("Please enter correct order id", 401));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

exports.adminGetAllOrders = BigPromise(async (req, res, next) => {
  const orders = await Order.find().populate("user", "name email");

  if (!orders) {
    return next(new CustomError("No orders to display", 401));
  }

  res.status(200).json({
    success: true,
    orders,
  });
});

exports.adminUpdateOrder = BigPromise(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order.orderStatus === "delivered") {
    return next(new CustomError("Order is already marked as delivered", 401));
  }

  order.orderStatus = req.body.orderStatus;

  order.orderItems.forEach(async (prod) => {
    await updateProductStock(prod.product, prod.quantity);
  });

  await order.save();
  res.status(200).json({
    success: true,
    order,
  });
});

exports.adminDeleteOrder = BigPromise(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order.orderStatus === "delivered") {
    return next(new CustomError("Order is already marked as delivered", 401));
  }

  order.orderItems.forEach(async (prod) => {
    await adjustProductStockOnDelete(prod.product, prod.quantity);
  });

  await order.remove();
  res.status(200).json({
    success: true,
    order,
  });
});

async function updateProductStock(productId, quantity) {
  const product = await Product.findById(productId);
  product.stock = product.stock - quantity;
  await product.save({ validateBeforeSave: false });
}

async function adjustProductStockOnDelete(productId, quantity) {
  const product = await Product.findById(productId);
  product.stock = product.stock + quantity;
  await product.save({ validateBeforeSave: false });
}
