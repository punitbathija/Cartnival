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
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        description: item.id,
        images: [item.photo],
      },
    },
    quantity: 1,
  }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'];

      shipping_address_collection:{
        allowed_countries:["IN", "US", "CA", "GB"]
      }

    })

});


