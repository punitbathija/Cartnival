const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const BigPromise = require("../middlewares/BigPromise");
const { buffer } = require("micro");
const Session = require("../models/session");

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

let endPointSecret;

endPointSecret = process.env.STRIPE_WEBHOOK_SECRET;

exports.stripeWebhook = BigPromise(async (request, response, next) => {
  const sig = request.headers["stripe-signature"];
  let data;
  let eventType;

  if (endPointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endPointSecret);
      console.log("Webhook Verified");
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      console.log(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = request.body.data.object;
    eventType = request.body.type;
  }
  // Handle the event

  if (eventType === "checkout.session.completed") {
    console.log("Data:", data);
  }
  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});
