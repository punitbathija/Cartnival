const express = require("express");
const router = express.Router();

const { capturePayment } = require("../controllers/paymentController");
const { isLoggedin } = require("../middlewares/customer");
const bodyParser = require("body-parser");

router.route("/create-checkout-session").post(isLoggedin, capturePayment);

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
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
  }
);

module.exports = router;
