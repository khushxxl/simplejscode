"use client";

import { Twitter } from "lucide";
import { Unlock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { paymentCheckout } from "../utils/checkout";

function Footer() {
  const [subscriberEmail, setsubscriberEmail] = useState(
    "khushaal.choithramani@gmail.com"
  );
  return (
    <div
      id="footer"
      className=" mb-10 max-w-6xl mx-auto flex flex-col items-center mt-20"
    >
      <p className="max-w-4xl text-center text-5xl font-bold ">
        Get Access to the Database Today 🪄
      </p>

      <div className=" bg-gradient-to-b from-sky-400 to-indigo-900 text-white max-w-md md:max-w-5xl space-y-3 w-full mt-10 rounded-2xl items-center flex flex-col justify-center h-[80vh] md:h-[50vh]">
        <h1 className="font-bold text-xl">Pre-Order Offer</h1>
        <h1 className="font-bold  text-3xl">One-Off Price for Lifetime</h1>
        <div className="border max-w-sm w-full rounded-xl bg-white ">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent  w-fit flex flex-1 text-black p-2 outline-none focus:outline-none"
          />
        </div>
        <div className="bg-white  max-w-sm p-3 w-fit rounded cursor-pointer">
          <button
            onClick={() => {
              paymentCheckout({
                subscriberEmail: subscriberEmail,
              });
            }}
          >
            <h1 className="font-semibold w-fit text-blue-600 text-sm">
              Pre order Now - <span className=" line-through">£20</span> £6
            </h1>
          </button>
        </div>
      </div>

      <div className="text-center flex flex-col items-center mt-10 text-sm">
        <p className="  ">Made with 💜 by Khushaal Choithramani</p>
        <p className="  ">Copyright © 2024 - simplejscode.com</p>
        <Link target="_blank" href={"https://twitter.com/khushaal_04"}>
          <div className="mt-3 cursor-pointer">
            <Image
              height={30}
              alt=""
              src={require("../assets/images/twitterIcon.png")}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
