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

  photos: [
    {
      id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please choose a category to continue"],
    enum: {
      values: [
        "Electronics",
        "Home and Kitchen",
        "Clothing and Accessories",
        "Beauty",
        "Toys and Games",
      ],
      message:
        "Please select categories from (Electronics, Home and Kitchen, Clothing and Accessories, Beauty, Toys and Games)",
    },
  },

  brand: {
    type: String,
    required: [true, "Please add a brand to continue"],
  },

  quantity: {
    type: Number,
    required: [true, "Please enter the quantity to continue"],
  },

  ratings: {
    type: Number,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      customer: {
        type: mongoose.Schema.ObjectId,
        ref: "Customer",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  customer: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
