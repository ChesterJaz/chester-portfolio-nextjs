"use client";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Mema from "./components/Mema";
import Socials from "./components/Socials";
import Hero from "./components/Hero";
import Aos from "aos";
import { useEffect } from "react";
import Skills from "./components/Skills";

export default function Home() {
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <head>
        <title>Chester portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className=" bg-white font-poppins">
        <header>
          <Navbar />
          <Hero />
          {/* <Mema /> */}
          <Socials />
          <Skills/>
        </header>
      </main>
    </div>
  );
}
