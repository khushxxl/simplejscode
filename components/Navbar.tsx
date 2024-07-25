"use client";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathName = usePathname();

  return (
    <div className="w-full bg-white sticky top-0 h-20">
      <div className=" max-w-6xl flex items-center  w-full h-full justify-center md:justify-between mx-auto  ">
        <a href="/#hero">
          <div className=" cursor-pointer">
            <p className="font-bold text-3xl "> {"{ }"} Simple JS Code</p>
          </div>
        </a>
        {pathName == "/" && (
          <div className="space-x-16 items-center hidden md:flex">
            <a href="/#features">
              <div className=" cursor-pointer">
                <p className="">Features</p>
              </div>
            </a>
            {/* <a href="#faq">
              <div className=" cursor-pointer">
                <p className="">FAQ</p>
              </div>
            </a> */}
            <a href="/#footer">
              <div className="bg-blue-700 cursor-pointer p-3 rounded-lg px-4 text-white">
                <p className=" font-semibold">Buy Now</p>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
