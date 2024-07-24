import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

export default function Home() {
  const stripePromise = loadStripe(
    "pk_test_51PfezLFmDqFvsXm8oXniQ3cgd3Q6wCvfxZ5tCrVSWBIOqAuz9CIGH6NrfWPN6JQ4rl5vdTPWT2e813q8VEVIsa9O00q4oSWK1w"
  );
  return (
    <main className="">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
