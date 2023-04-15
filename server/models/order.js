const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    // mobile: {
    //   type: String,
    //   required: true,
    // },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  paymentInfo: {
    id: {
      type: String,
    },
  },
  // taxAmount: {
  //   type: Number,
  //   required: true,
  // },
  shippingAmount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "processing",
    enum: {
      values: ["processing", "cancelled", "shipped", "delivered"],
      message:
        "Please select categories from (processing, cancelled, delivered, shipped)",
    },
  },
  deliveredAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
