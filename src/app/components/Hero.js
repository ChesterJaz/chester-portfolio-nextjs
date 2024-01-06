"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";

function Hero() {
  return (
    <div className=" text-gray-800  justify-center flex">
      <div className="max-w-[800px] text-center justify-center flex flex-col">
        <h2 data-aos="fade-right" data-aos-duration="1000" className=" md:text-6xl sm:text-5xl text-4xl font-bold text-gray-700">
          Chester Jazmin
        </h2>
        <div className="my-2 text-3xl flex mx-auto">
        <h3 data-aos="fade-left" data-aos-duration="1000">Software Developer</h3>
          {/* <TypeAnimation
            sequence={[
              "I am a Frontend Dev",
              1000,
              "I am a Backend Dev",
              1000,
              "I am a Fullstack Dev",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          /> */}
        </div>
        <p data-aos="fade-in" data-aos-duration="1000" className="leading-10 px-10 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <button data-aos="fade-up" data-aos-duration="1000" className=" bg-gray-700 text-white w-56 mx-auto rounded-md py-3 my-6 font-medium hover:bg-gray-400 hover:text-black">Get started</button>
      </div>
    </div>

    // <section className="pt-0" id="about">
    //   <div className="container pt-14">
    //     <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
    //       {/* =============left hero ============*/}
    //       <div className="w-full md:basis-1/2">
    //         <h5 data-aos="fade-right" data-aos-duration="1500" className="text-2xl text-black">Hello world</h5>
    //       </div>

    //       {/* right hero */}
    //     </div>

    //   </div>
    // </section>
  );
}

export default Hero;
