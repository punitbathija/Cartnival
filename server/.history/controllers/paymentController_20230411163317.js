const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const BigPromise = require("../middlewares/BigPromise");
const { buffer, send } = require("micro");

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

exports.stripeWebhook = BigPromise(async (req, res, next) => {
  // endPointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // const requestBuffer = await buffer(req);
  // const payload = requestBuffer.toString();
  // const sig = req.headers["stripe-signature"];

  // console.log(sig);

  // let event;

  // try {
  //   event = stripe.webhooks.constructEvent(payload, sig, endPointSecret);
  // } catch (error) {
  //   console.log("ERROR", error.message);
  //   return res.status(400).send(`Webhook error: ${error.message}`);
  // }
  res.status(200).json({
    success: true,
    message: "this route is working",
  });

  // if (event.type === "checkout.session.completed") {
  //   const session = event.data.object;

  //   return res
  //     .status(200)
  //     .catch((err) =>
  //       res.status(400).send.send(`Webhook Error: ${err.message}`)
  //     );
  // }

  // const sig = req.headers["stripe-signature"];
  // let data;
  // let eventType;
  // const requestBuffer = await buffer(req);
  // const payload = requestBuffer.toString();

  // if (endPointSecret) {
  //   let event;

  //   try {
  //     event = await stripe.webhooks.constructEvent(
  //       payload,
  //       sig,
  //       endPointSecret
  //     );
  //     console.log("Webhook Verified");

  //     console.log(event.data.object);
  //     console.log(event.data.type);
  //   } catch (err) {
  //     console.log(`Webhook Error: ${err.message}`);
  //     return res.status(400).send(`Webhook Error: ${err.message}`);
  //   }
  // } else {
  //   data = req.body.data.object;
  //   eventType = req.body.type;
  // }
  // // Handle the event

  // if (eventType === "checkout.session.completed") {
  //   console.log("Data:", data);
  // }
  // // Return a 200 res to acknowledge receipt of the event
  // res.send().end();
});
