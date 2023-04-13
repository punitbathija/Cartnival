const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const BigPromise = require("../middlewares/BigPromise");
const { Buffer } = require("buffer");

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

exports.handleStripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  console.log(sig);

  const buf = Buffer.from(JSON.stringify(req.body));

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(
    `✅ Received event of type "${event.type}" with ID: "${event.id}"`
  );

  // Handle the event based on type
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log(`💰 Checkout session ${session.id} completed`);
      // TODO: Create an order based on session data
      break;
    }
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      console.log(`💰 PaymentIntent ${paymentIntent.id} succeeded`);
      // TODO: Update the order with payment intent data
      break;
    }
    default: {
      console.log(`❌ Unhandled event type "${event.type}"`);
      break;
    }
  }

  return res.status(200).json({ received: true });
};
