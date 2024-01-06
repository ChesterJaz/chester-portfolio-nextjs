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
    <div>
      <nav className="py-5 mb-12 flex justify-between h-24 w-[100%] border-b">
        <div className="h-[200px] w-[200px] py-2  ml-16">
          <a href="#">
            <Image src={logoW} />
          </a>
        </div>

        <div className="text-xl my-auto mr-16 items-center hidden md:block">
          <ul className="flex gap-10">
            <li className="relative group">
              <a href="#" className="inline-block">
                Home
              </a>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </li>

            <li className="relative group">
              <a href="#" className="inline-block">
                Skills
              </a>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </li>

            <li className="relative group">
              <a href="#" className="inline-block">
                Projects
              </a>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </li>

            <li className="relative group">
              <a href="#" className="inline-block">
              Contact
              </a>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </li>

            {/* <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li> */}
          </ul>
        </div>

        <div className="cursor-pointer block md:hidden my-auto">
          <TbMenu2 size={30} onClick={toggleNav} />
        </div>

        <div
          className={
            nav
              ? "fixed bg-gray-700 top-0 right-0 w-[50%] h-full border-r-green-500 shadow-md rounded-sm ease-in-out duration-500"
              : "fixed right-[-100%]  ease-in-out w-[50%] h-full duration-500 top-0"
          }
        >
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
            <li className="py-4 px-1 border-b">
              <a href="">Download CV</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
