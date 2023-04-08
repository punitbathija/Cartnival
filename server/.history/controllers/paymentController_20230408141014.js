// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
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
  const { amount, currency, paymentMethodId, customer } = req.body;

  const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);

  const paymentintetnt = await stripe.paymentIntents.create({
    amount,
    currency,
    customer,
    payment_method: paymentMethod.id,
  });
});
