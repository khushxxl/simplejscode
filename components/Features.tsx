import { Rocket } from "lucide-react";
import React from "react";

function Features() {
  const FeatureComponent = () => {
    return (
      <div className="max-w-xl text-left border p-10 rounded-lg">
        <div className="border w-fit rounded-full p-3">
          <Rocket size={30} fill="blue" color="blue" />
        </div>
        <p className=" text-2xl font-bold mt-3  ">
          A Curated Collection of Directories
        </p>
        <p className="text-xl mt-2">
          Accusam dolore sit ea amet voluptua sit at sit. Ipsum et est gubergren
          diam. Est erat stet est takimata voluptua sit dolor. Invidunt aliquyam
          duo lorem takimata takimata rebum justo.
        </p>
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
        <FeatureComponent />

        <FeatureComponent />

        <FeatureComponent />
      </div>
    </div>
  );
}

export default Features;
