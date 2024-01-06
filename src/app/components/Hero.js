"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-[800px]  mt-[150px] w-full h-screen mx-auto text-center flex flex-col">
        <h2 className=" md:text-6xl sm:text-5xl text-4xl font-bold text-gray-700">
          Chester Jazmin
        </h2>
        <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "I am a Frontend Dev",
              1000,
              "I am a Backend Dev",
              1000,
              "I am a Fullstack Dev",
              1000,
              "I am handsome",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <p className="leading-10 px-10 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}

export default Hero;
