import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function paymentCheckout({ subscriberEmail }) {
  let stripePromise;
  try {
    const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(
          "pk_test_51PfezLFmDqFvsXm8oXniQ3cgd3Q6wCvfxZ5tCrVSWBIOqAuz9CIGH6NrfWPN6JQ4rl5vdTPWT2e813q8VEVIsa9O00q4oSWK1w"
        );
      }
      return stripePromise;
    };

    const stripe = await getStripe();

    const session = await stripe
      ?.redirectToCheckout({
        mode: "payment",
        lineItems: [
          {
            price: "price_1Pff25FmDqFvsXm88TgHWsKl",
            quantity: 1,
          },
        ],
        successUrl: `${window.location.origin}/success?success?session_id={CHECKOUT_SESSION_ID}?subscriberEmail=${subscriberEmail}`,
        cancelUrl: `${window.location.origin}/?canceled=true`,
      })
      .then((result) => {});
  } catch (error) {
    console.log(error);
  }
}
