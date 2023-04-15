const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Buffer } = require("buffer");
const express = require("express");
const Order = require("../models/order");
const router = express.Router();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;

const createOrder = async (data, lineItems) => {
  const stringItems = data.metadata.stringItems;
  let itemId = JSON.parse(stringItems).map((item) => item.id);
  let itemName = JSON.parse(stringItems).map((item) => item.name);
  let itemPrice = JSON.parse(stringItems).map((item) => item.price);
  let imageLink = JSON.parse(data.metadata.images);
  let image = imageLink[0];

  console.log(itemName, itemPrice);

  const newOrder = new Order({
    shippingInfo: {
      address:
        data.customer_details.address.line1 +
        data.customer_details.address.line2,
      city: data.customer_details.address.city,
      state: data.customer_details.address.state,
      postalCode: data.customer_details.address.postal_code,
      country: data.customer_details.address.country,
    },

    customer: data.metadata.customer_id,
    orderItems: [
      {
        name: itemName[0],
        photo: image,
        quantity: 1,
        price: itemPrice[0],
        product: itemId,
      },
    ],
    paymentInfo: {
      id: data.id,
    },
    shippingAmount: data.shipping_cost.amount_subtotal / 100,
    totalAmount: data.amount_total / 100,
  });

  try {
    const savedOrder = await newOrder.save({
      validateBeforeSave: false,
    });

    console.log("Processed order: ", savedOrder);
  } catch (error) {
    console.log(error);
  }
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
      // console.log("data:", data);
      const lineItems = await stripe.checkout.sessions.listLineItems(
        `${data.id}`
      );
      // console.log(lineItems);
      createOrder(data, lineItems);
    }
    // Return a 200 res to acknowledge receipt of the event
    res.send().end();
  }
);

module.exports = router;
