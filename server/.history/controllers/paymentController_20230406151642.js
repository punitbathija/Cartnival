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

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("Price", product.price);
  // To avoid duplication for payments
  const idempotencyKey = uuid();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charger.create(
        {
          amount: product.price * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of $(product.name)`,
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
    });
});
