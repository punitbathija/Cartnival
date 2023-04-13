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
  // Verify the signature of the incoming webhook event
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.sendStatus(400);
  }

  // Handle the event based on its type
  switch (event.type) {
    case "payment_intent.succeeded":
      // Extract the payment intent object from the event
      const paymentIntent = event.data.object;

      // TODO: Implement your own logic here to process the payment and create orders on your app
      console.log(`PaymentIntent ${paymentIntent.id} succeeded.`);

      break;
    case "payment_intent.payment_failed":
      console.log("Payment failed.");
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Return a 200 OK response to acknowledge receipt of the webhook event
  res.sendStatus(200);
};
