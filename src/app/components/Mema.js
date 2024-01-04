import React from "react";
import pic from "../../../public/char.jpg";
import htmlLogo from "../../../public/html.png";
import jsLogo from "../../../public/js.png";
import cssLogo from "../../../public/css.png";
import reactLogo from "../../../public/react.png";
import pythonLogo from "../../../public/python.png";
import Image from "next/image";

function Mema() {
  return (
    <div>
      <div className="text-center p-5">
        <h2 className="text-5xl text-bold py-2 font-poppins font-bold text-gray-700">
          Chester Jazmin
        </h2>
        <h3 className="py-2 text-2xl font-poppins font-semibold">Developer</h3>
        <p className=" font-poppins leading-10 px-10 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>

      {/* icons */}
      <div className="py-2">
        <h3 className="text-2xl text-center py-5 font-poppins  font-bold">
          Technical Skills
        </h3>

        <div className="flex justify-center gap-10">
          <Image src={htmlLogo} height={50} width={50} />
          <Image src={cssLogo} height={50} width={50} />
          <Image src={jsLogo} height={50} width={50} />
          <Image src={reactLogo} height={50} width={50} />
          <Image src={pythonLogo} height={50} width={50} />
        </div>
      </div>

      <div className=" relative mx-auto bg-gradient-to-b from-gray-600 to-teal-200 rounded-full w-80 h-80 overflow-hidden mt-10">
        <Image src={pic} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Mema;
