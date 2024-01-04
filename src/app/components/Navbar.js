"use client";

import React, { useState } from "react";
import logoW from "../../../public/logo1.png";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="py-5 mb-12 flex justify-between h-24">
      <div className="block">
        <a href="#">
          <Image src={logoW} height={200} width={200} />
        </a>
      </div>

      <div>
        <ul className=" items-center gap-10 text-xl justify-center hidden">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className="cursor-pointer block md:hidden my-auto">
        <TbMenu2 size={30} onClick={toggleNav} />
      </div>

      <div className={nav ? "fixed bg-gray-700 top-0 right-0 w-[50%] block lg:hidden h-full border-r-green-500 shadow-md rounded-sm ease-in-out duration-500" : "fixed right-[-100%]"}>
        <ul className="text-white p-8 upper">

          <div className="cursor-pointer">
            <CgClose size={30} onClick={toggleNav} />
          </div>

          <li className="py-4 px-1 border-b">
            <a href="">Home</a>
          </li>
          <li className="py-4 px-1 border-b">
            <a href="">Skills</a>
          </li>
          <li className="py-4 px-1 border-b">
            <a href="">Projects</a>
          </li>
          <li className="py-4 px-1 border-b">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

     
    </nav>
  );
}

export default Navbar;
