const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Buffer } = require("buffer");
const express = require("express");
const { createOrder } = require("../controllers/orderController");
const router = express.Router();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;

const createOrder = async (data, lineItems) => {
  console.log("hello world!");
};

// endpointSecret =
//   "whsec_8678088aefdd2a482a03c6d3475949a8c4c8ce0c7b3bf8f42d1f99a5d2e53d2d";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let data;
    let eventType;

    if (endpointSecret) {
      let event;

      try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        console.log("Webhook Verified");
      } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }

      data = event.object.data;
      eventType = event.type;
    } else {
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the event

    if (eventType === "checkout.session.completed") {
      console.log("data:", data);
      const lineItems = await stripe.checkout.sessions.listLineItems(
        `${data.id}`
      );
      console.log(lineItems);
    }
    createOrder({
      shippingInfo: {
        address:
          data.customer_details.address.line1 &&
          data.customer_details.address.line2,
        city: data.customer_details.address.city,
        state: data.customer_details.address.state,
        postalCode: data.customer_details.address.postal_code,
        country: data.customer_details.address.country,
      },
      customer: {
        customer: data.metadata.customer_id,
      },
      orderItems: [
        {
          name: lineItems.description,
          quantity: lineItems.quantity,
          price: lineItems.amount_total / 100,
          product: data.metadata.JSON.parse(stringItems).map((item) => item.id),
        },
      ],
      paymentInfo: {
        id: data.id,
      },
      shippngAmount: data.shipping_cost.amount_subtotal / 100,
      totalAmount: data.amount_total / 100,
    });
    // Return a 200 res to acknowledge receipt of the event
    res.send().end();
  }
);

module.exports = router;
