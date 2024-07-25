import { Rocket } from "lucide-react";
import React from "react";

function Features() {
  const FeatureComponent = ({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) => {
    return (
      <div className="max-w-xl min-h-[50vh] text-left border p-10 rounded-lg">
        <div className="border w-fit rounded-full p-3">
          <Rocket size={30} fill="blue" color="blue" />
        </div>
        <p className=" text-2xl font-bold mt-3  ">{title}</p>
        <p className="text-xl mt-2">{text}</p>
      </div>
    );
  };

  return (
    <div
      id="features"
      className="max-w-7xl mt-20  flex-col mx-auto w-full flex items-center justify-center"
    >
      <p className=" text-center text-5xl font-bold ">What do you get?</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 place-items-center">
        <FeatureComponent
          title={"More than 150+ Code Snippets"}
          text={
            "Our Notion Databse consists of more than 150 code snippets for you to use in your coding projects. This includes code for your next Web Dev, App Dev, Web3 or Nodejs Project."
          }
        />

        <FeatureComponent
          title={"Multi Use Case"}
          text={
            "The database not only comprises of JS code snippets, but also web3 and nodejs code that is often used on our daily projects."
          }
        />

        <FeatureComponent
          title={"Easy to Integrate"}
          text={
            "Simply copy the code, and paste it in your project! How simpler can this be!"
          }
        />
      </div>
    </div>
  );
}

export default Features;
