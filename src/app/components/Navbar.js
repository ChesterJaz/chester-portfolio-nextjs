import React, {  } from "react";
import logoW from "../../../public/logo1.png";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

function Navbar() {
//   const [nav, setNav] = useState(false);

  return (
    <nav className=" py-5 mb-12 flex justify-between h-24 items-center">
      <div className="w-full">
        <a href="#">
          <Image src={logoW} height={200} width={200} />
        </a>
      </div>

      <ul className="items-center gap-10 text-xl hidden">
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

      <div>
        <TbMenu2 size={30}/>
      </div>

      <div className="fixed bg-black top-0 left-0 w-[60%] h-full">
        <ul>
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

      {/* <ul className="flex items-center">
                  <li className="cursor-pointer text-2xl ">
                    <BsFillMoonStarsFill />
                  </li>
                  <li className="flex px-5">
                    <a
                      className=" bg-gradient-to-r from-gray-500 to-blue-400 text-white px-4 py-2 rounded-md ml-8"
                      href="#"
                    >
                      Download CV
                    </a>
                  </li>
                </ul> */}
    </nav>
  );
}

export default Navbar;
