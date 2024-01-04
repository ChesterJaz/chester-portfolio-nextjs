import React from "react";

function Hero() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-[800px]  mt-[150px] w-full h-screen mx-auto text-center flex flex-col">
        <h2 className=" md:text-6xl sm:text-5xl text-4xl font-bold text-gray-700">
          Chester Jazmin
        </h2>
        <div>
          <h3 className="py-2 text-2xl font-poppins font-semibold">I am a</h3>
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
