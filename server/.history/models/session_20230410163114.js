const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    
amount: {
    type: Number,
    required : true
}



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
