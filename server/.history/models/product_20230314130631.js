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

  photos: {
    id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },

  category: {
    type: String,
    required: [true, "Please choose a category to continue"],
  },

  brand: {
    type: String,
    required: [true, "Please add a brand to continue"],
  },
});
