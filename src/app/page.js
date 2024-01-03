
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <head>
        <title>Chester portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className=" bg-white px-10">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl">develop by ches</h1>
            {/* <img src={} width={100} height={100}/> */}
            {/* <a className="" href="#">Home</a>
            <a className="" href="#">Experience</a>
            <a className="" href="#">Skills</a>
            <a className="" href="#">Projects</a> */}

            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl "><BsFillMoonStarsFill/></li>
              <li className="flex px-5">
                <a className=" bg-gradient-to-r from-gray-500 to-blue-400 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>

            <div className="text-center p-10">
              <h2>Chester Jazmin</h2>
              <h3>Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>


            <div>
              <AiFillLinkedin/>
              <BsTwitterX/>
              <FaFacebook/>
            </div>


        </section>
      </main>
    </div>
  );
}
