import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function paymentCheckout() {
  let stripePromise;
  try {
    const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(process.env.STRIPE_TEST_KEY_PUBLIC);
      }
      return stripePromise;
    };

    const stripe = await getStripe();
    const session = await stripe?.redirectToCheckout({
      mode: "payment",
      lineItems: [
        {
          price: "price_1Pff25FmDqFvsXm88TgHWsKl",
          quantity: 1,
        },
      ],
      successUrl: `${window.location.origin}/success?success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/?canceled=true`,
    });
  } catch (error) {
    console.log(error);
  }
}
