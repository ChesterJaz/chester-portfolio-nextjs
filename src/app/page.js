
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import logoW from '../../public/logo1.png'
import pic from '../../public/dev-ed-wave.png'

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
            <a href="#"><Image src={logoW} height={250} width={250}/></a>
            {/* <img src={} width={100} height={100}/> */}
            {/* <a className="" href="#">Home</a>
            <a className="" href="#">Experience</a>
            <a className="" href="#">Skills</a>
            <a className="" href="#">Projects</a> */}

            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl "><BsFillMoonStarsFill/></li>
              <li className="flex px-5">
                <a className=" bg-gradient-to-r from-gray-500 to-blue-400 text-white px-4 py-2 rounded-md ml-8" href="#">Download CV</a>
              </li>
            </ul>
          </nav>


          {/* text center */}

            <div className="text-center p-10">
              <h2 className="text-5xl text-bold py-2 font-bold text-gray-700">Chester Jazmin</h2>
              <h3 className="py-2 text-2xl font-semibold">Developer</h3>
              <p className=" leading-10 px-10 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

              {/* icons */}
            <div className="text-5xl flex justify-center gap-10 text-gray-600">
              <a href=""><IoLogoLinkedin/></a>
              <a href=""><BsTwitterX/></a>
              <a href=""><FaFacebook/></a>
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-gray-600 to-teal-200 rounded-full w-80 h-80 mt-10 overflow-hidden">
              <Image src={pic} layout="fill" objectFit="cover"/>
            </div>


        </section>
      </main>
    </div>
  );
}
