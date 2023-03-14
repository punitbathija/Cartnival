const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    String,
    required: [true, "Please enter a product name"],
    trim: true,
    maxlength: [120, "Product name should not be more than 120 characters"],
  },
});
