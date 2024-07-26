import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple JS Code",
  description:
    "A hand-picked collection of more than 150+ JS code snippets that's constantly updated, and curated for you to include it in your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@khush.dev" />
        <meta
          name="twitter:title"
          content="Simple JS Code - A Curated Directory of JS Code"
        />
        <meta
          name="twitter:description"
          content="A hand-picked collection of more than 150+ JS code snippets that's constantly updated, and curated for you to include it in your next project."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/g7JTQQm/Screenshot-2024-07-26-at-14-51-54.png"
        />
      </Head>
      <meta
        name="twitter:image"
        content="https://styles/assetsOptimized/ourStory/StoreFront.jpeg"
      ></meta>

      <body className={inter.className}>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
