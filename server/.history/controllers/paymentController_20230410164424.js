const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const BigPromise = require("../middlewares/BigPromise");
const { buffer } = require("micro");
const Session = require("../models/session");
const session = require("../models/session");

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

exports.stripeWebhook = BigPromise(async (req, res, next) => {
  const endPointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  const requestBuffer = await buffer(req);
  const payload = requestBuffer.toString();
  const sig = request.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, endPointSecret);
  } catch (error) {
    console.log("Error!!!" + error);
    return res.status(400).send(`Webhook error ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    res.status(200).json({
      success: true,
    });
  }
  fullfillOrder(session);
});

const fullfillOrder = async (session) => {
  const newSession = await Session.create({
    amount: session.amount_total / 100,
    session_id: session.id,
    customer: session.metadata.email,
  });
};
