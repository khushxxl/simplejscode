import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function paymentCheckout() {
  const LIVE_PUBLIC_KEY: any = process.env.STRIPE_LIVE_KEY_PUBLIC;
  const TEST_PUBLIC_KEY: any = process.env.STRIPE_TEST_KEY_PUBLIC;

  let stripePromise: Promise<Stripe | null>;
  try {
    const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(TEST_PUBLIC_KEY);
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
