const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const BigPromise = require("../middlewares/BigPromise");
const { buffer } = require("micro");

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
    payment_method_types: ["card"],

    shipping_address_collection: {
      allowed_countries: ["IN", "US", "CA", "GB"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.PAYMENT}/success`,
    cancel_url: `${process.env.PAYMENT}/fail`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.photo)),
    },
  });

  res.status(200).json({
    id: session.id,
  });
});

exports.stripeWebhook = async (request, response, next) => {
  const stripeEvent = stripe.webhooks.constructEvent(
    body,
    headers["stripe-signature"],
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (stripeEvent.type === "payment_intent.succeeded") {
    console.log(stripeEvent.data.object);
  }
};
