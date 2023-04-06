const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const uuid = require("uuid");
const BigPromise = require("../middlewares/BigPromise");
const { v4 } = require("uuid");

exports.sendStripeKey = BigPromise(async (req, res, next) => {
  res.status(200).json({
    success: true,
    stripeKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

exports.captureStripePayment = BigPromise(async (req, res, next) => {
  const charge = await stripe.charges.create({
    amount: req.body.amount,
    currency: "inr",
  });

  res.status(200).json({
    success: true,
    id: charge.id,
    amount: charge.amount,
    currency: charge.currency,
    status: charge.status,
  });
});

exports.capturePayment = BigPromise(async (req, res, next) => {
  console.log(req.body.token);
  const { token, amount } = req.body;
  const uniqueKey = v4();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          product: "{{PRODUCT_ID}}",
          unit_amount: req.body.amount,
          currency: "inr",
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://127.0.0.1:5173/",
    cancel_url: "http://127.0.0.1:5173/cart",
  });
});
