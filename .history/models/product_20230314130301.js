const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
    trim: true,
    maxlength: [120, "Product name should not be more than 120 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price to continue"],
    maxlength: [5, "Product cannot be more than 99999"],
  },

  description: {
    type: String,
    required: [true, "Please provide a description for the product"],
  },
});
