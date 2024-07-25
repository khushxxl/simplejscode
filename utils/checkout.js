import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function paymentCheckout({ subscriberEmail }) {
  let stripePromise;
  try {
    const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(
          "pk_live_51PfezLFmDqFvsXm8JKOhtk94ctA1kkIlXTX0GfgiAnMtHXKK74x8ck4We93aOwTwBdQsAKtd88OXr0zEExQq3Wga00dAHbp1wB"
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
            price: "price_1PgSKQFmDqFvsXm8ipJvcMNQ",
            quantity: 1,
          },
        ],
        successUrl: `${window.location.origin}/success?subscriberEmail=${subscriberEmail}&success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/?canceled=true`,
      })
      .then((result) => {});
  } catch (error) {
    console.log(error);
  }
}
