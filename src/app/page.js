import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import logoW from "../../public/logo1.png";
import pic from "../../public/char.jpg";
import htmlLogo from "../../public/html.png";
import jsLogo from "../../public/js.png";
import cssLogo from "../../public/css.png";
import reactLogo from "../../public/react.png";
import pythonLogo from "../../public/python.png";

export default function Home() {
  return (
    <div>
      <head>
        <title>Chester portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className=" bg-white px-10">
        <section className="min-h-screen">
          <nav className=" py-5 mb-12 flex justify-between">
            <a href="#">
              <Image src={logoW} height={250} width={250} />
            </a>
            {/* <img src={} width={50} height={50}/> */}
            {/* <a className="" href="#">Home</a>
            <a className="" href="#">Experience</a>
            <a className="" href="#">Skills</a>
            <a className="" href="#">Projects</a> */}

            <ul className="flex items-center">
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
            </ul>
          </nav>

          {/* text center */}

          <div className="text-center p-5">
            <h2 className="text-5xl text-bold py-2 font-poppins font-bold text-gray-700">
              Chester Jazmin
            </h2>
            <h3 className="py-2 text-2xl font-poppins font-semibold">
              Developer
            </h3>
            <p className=" font-poppins leading-10 px-10 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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

          <div className="relative mx-auto bg-gradient-to-b from-gray-600 to-teal-200 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <Image src={pic} layout="fill" />
          </div>
        </section>

        <section>
          <div className="text-5xl flex justify-center gap-10 text-gray-600 py-5">
            <a href="">
              <IoLogoLinkedin />
            </a>
            <a href="">
              <BsTwitterX />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
