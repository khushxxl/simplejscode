import { NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51PfezLFmDqFvsXm8AYlgCdA0nI3QAopmfA01nIK3rNXLeBBJRQSBU6W4D738GzbMbBT8AjdHQKwwc1H6ez3aBbuF00YZ20Itbq"
);

export async function GET(request: Request) {
  await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1Pff25FmDqFvsXm88TgHWsKl",
        quantity: 1,
      },
    ],
    mode: "payment",

    success_url: `/success?success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `$/?canceled=true`,
  });
  return NextResponse.json({ check: "true" });
}
