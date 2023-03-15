const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const uuid = require("uuid");
const BigPromise = require("../middlewares/BigPromise");

exports.sendStripeKey = BigPromise(async (req, res, next) => {
  res.status(200).json({
    success: true,
    stripeKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

exports.captureStripePayment = BigPromise(async (req, res, next) => {
  const payment = await stripe.charges.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: { orderReciept: uuid.v4() },
  });

  res.status(200).json({
    success: true,
    client_secret: payment.client_secret,
    metadata,
  });
});
