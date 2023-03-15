const Stripe = require("stripe");
const BigPromise = require("../middlewares/BigPromise");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.sendStripeKey = BigPromise(async (req, res, next) => {
  res.status(200).json({
    success: true,
    stripeKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

exports.capturePayment = async (amount, currency, source, description) => {
  try {
    const charge = await stripe.charges.create({
      amount: amount,
      currency: currency,
      source: source,
      description: description,
    });

    return {
      id: charge.id,
      amount: charge.amount,
      currency: charge.currency,
      status: charge.status,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
