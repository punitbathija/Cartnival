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
  const { amount, description, currency, source } = req.body;

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
  try {
    const { amount, currency, paymentMethodId, customer } = req.body;

    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      customer,
      payment_method: paymentMethod.id,
      off_session: true,
      confirm: true,
    });

    res.status(200).json(paymentIntent);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});
