// app/api/create-checkout-session/route.js

import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51PfezLFmDqFvsXm8AYlgCdA0nI3QAopmfA01nIK3rNXLeBBJRQSBU6W4D738GzbMbBT8AjdHQKwwc1H6ez3aBbuF00YZ20Itbq",
  {
    apiVersion: "2022-11-15", // Use the appropriate API version
  }
);

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1Pff25FmDqFvsXm88TgHWsKl",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `/?canceled=true`,
    });

    return new Response(JSON.stringify({ id: session.id }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
