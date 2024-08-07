"use client";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// import Video from "../assets/demo.mp4";

function Hero() {
  const [subscriberEmail, setsubscriberEmail] = useState(
    "khushaal.choithramani@gmail.com"
  );

  const searchParams = useSearchParams();

  console.log("Check", searchParams.get("check"));

  const sendEmail = async () => {
    if (subscriberEmail) {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          reciever: subscriberEmail,
        }),
      }).then(() => {
        console.log("email sent");
      });
    }
  };

  const TagText = ({ text }: { text: string }) => {
    return (
      <div className="p-3 rounded-3xl bg-gray-200">
        <p className=" bg-clip-text text-transparent bg-gradient-to-t from-fuchsia-500 via-red-600 to-orange-400">
          {text}
        </p>
      </div>
    );
  };

  const routerSearch = useSearchParams();
  console.log(routerSearch.get("success"));
  const paymentSuccessFull = routerSearch.get("success");
  const paymentCanceled = routerSearch.get("canceled");

  useEffect(() => {
    if (paymentSuccessFull) {
      toast.success(
        "Your Payment was Successfull, You shall receive a email shortly",
        {
          style: {
            textAlign: "center",
          },
        }
      );
    }
    if (paymentCanceled) {
      toast.error("Your Payment Failed", {
        style: {
          textAlign: "center",
        },
      });
    }
  }, [paymentCanceled, paymentSuccessFull]);

  return (
    <div
      id="hero"
      className="max-w-6xl flex-col mx-auto w-full flex items-center mt-20"
    >
      <a
        href="https://www.producthunt.com/posts/simple-js-code?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-simple&#0045;js&#0045;code"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=474242&theme=light"
          alt="Simple&#0032;JS&#0032;Code - &#0032;Hand&#0045;picked&#0032;collection&#0032;of&#0032;more&#0032;than&#0032;150&#0043;&#0032;JS&#0032;code&#0032;snippets&#0046;&#0032; | Product Hunt"
          width="250"
          height="54"
        />
      </a>
      <p className="max-w-4xl text-center text-5xl mt-5 font-bold ">
        A Curated Directory of JS Code That You Can Copy Paste in Your Projects
      </p>
      {/* <Link href={"https://www.notion.so/"}>
        <div className="mt-4 underline flex items-center space-x-2">
          <p>Built with</p>
          <Image
            height={25}
            alt=""
            src={require("../assets/images/notion-logo.png")}
          />
        </div>
      </Link> */}

      <p className="max-w-4xl text-center text-2xl mt-20 font-semibold ">
        A hand-picked collection of more than 150+ JS code snippets that's
        constantly updated, and curated for you to include it in your next
        project.
      </p>

      <div className=" flex flex-col justify-center items-center">
        <p className="max-w-4xl text-center text-2xl mt-20 ">
          Why would you even need a data base of simple code?
        </p>
        <div className="text-xl max-w-3xl space-y-4   text-center flex justify-center flex-col items-center">
          <p className="text-center mt-4  ">
            Ever prompted ChatGPT? - Write JS code to generate a{" "}
            <span className="font-bold underline">Deep Clone of an Object</span>
            {"  "}or write a code to{" "}
            <span className="font-bold underline">Throttle a function</span> or{" "}
            <span className="font-bold underline">Debounce a function</span> or
            how to make a{" "}
            <span className="font-bold underline">Web 3 Connect Button</span>?
          </p>
          <p>
            We often stumble upon writing simple pieces of code that uses some
            formula or we simply don't remember how to write it!
          </p>

          <p>
            Using{" "}
            <span className=" font-bold">
              Simple Javascript Code's Notion Database
            </span>{" "}
            one can simple copy and paste these often used code snippets.
          </p>

          <div className="text-sm grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-10 font-semibold">
            <TagText text="Typescript" />
            <TagText text="Javascript" />

            <TagText text="Nodejs" />
            <TagText text="Web 3 " />
          </div>
        </div>
      </div>

      <div className="mx-10 max-w-5xl  mt-10 w-full  flex  flex-col justify-center h-[80vh] md:p-4 items-center  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border p-0  rounded-xl">
        <iframe
          allow="autoplay"
          className="  rounded-lg mx-4 md:w-full md:max-w-4xl md:h-[70vh] mt-10  w-[300px]  h-[200px]"
          src="https://www.youtube.com/embed/YGpkSteQd5A?si=2JbWXecs9I-exSbO?autoplay=1&muted=1"
        ></iframe>

        {/* <video
          autoPlay
          controls
          loop
          style={{ width: "500px", height: "500px" }}
        >
          <source src="../assets/demo.mp4" />
        </video> */}

        <a href="#footer">
          <div className="bg-white mt-10 mb-10 lg:mb-0 p-3 rounded cursor-pointer">
            <h1 className="font-semibold flex items-center  space-x-5 text-blue-600 text-sm">
              Unlock the entire database{" "}
              <p>
                <LockIcon className="ml-3" />
              </p>
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;

// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/YGpkSteQd5A?si=2JbWXecs9I-exSbO"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen
// ></iframe>;
