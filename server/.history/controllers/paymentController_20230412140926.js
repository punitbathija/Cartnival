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

exports.stripeWebhook = async (req, res, next) => {
  // // try {
  // //   const requestBuffer = Buffer.from(JSON.stringify(req.body)).toString(
  // //     "base64"
  // //   );
  // //   const payload = requestBuffer;
  // //   const sig = req.headers["stripe-signature"];

  // //   let event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

  // //   if (event.type === "checkout.session.completed") {
  // //     const session = event.data.object;

  // //     console.log(session);

  // //     return res.status(200).json({
  // //       success: true,
  // //     });
  // //   } else {
  // //     console.log("Unhandled event type:", event.type);
  // //     return res.status(200).send();
  // //   }
  // // } catch (error) {
  // //   console.log("Webhook error:", error.message);
  // //   return res.status(400).send(`Webhook error: ${error.message}`);
  // // }

  // const payload = req.body.toString();
  // const sig = req.headers["stripe-signature"];
  // const endpointsecret = process.env.STRIPE_WEBHOOK_SECRET;
  // let event;
  // try {
  //   event = stripe.webhooks.constructEvent(payload, sig, endpointsecret);
  // } catch (error) {
  //   console.log(error.message);
  //   res.status(400).json({ success: false });
  //   return;
  // }
  // console.log(event.type);
  // console.log(event.data.object);
  // console.log(event.data.object.id);
  // res.json({
  //   success: true,
  // });

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  // let event = req.body;
  // if (endpointSecret) {
  // Get the signature sent by Stripe
  const signature = req.headers["stripe-signature"];
  console.log(signature);
  // try {
  //   event = stripe.webhooks.constructEvent(
  //     req.body,
  //     signature,
  //     endpointSecret
  //   );
  // } catch (err) {
  //   console.log(`⚠️  Webhook signature verification failed.`, err.message);
  //   return res.sendStatus(400);
  // }
  // // if (event.type === "payment_intent.succeeded") {
  //     const paymentIntent = event.data.object;
  //     console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
  //     return res.sendStatus(200);
  //   } else
  //     (error) => {
  //       console.log(`Unhandled event type ${event.type} ${error.message}.`);
  //       return res.sendStatus(400);
  //     };
  // }
};
