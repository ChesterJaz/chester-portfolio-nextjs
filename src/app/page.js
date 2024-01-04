
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


import Navbar from "./components/Navbar";
import Mema from "./components/Mema";
import Socials from "./components/Socials";
import Hero from "./components/Hero";

export default function Home() {
  // const [loading, setLoading] = useState(false)

  return (

      <div>
        <head>
          <title>Chester portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </head>

        <main className=" bg-white px-10 font-poppins">
          <section className="min-h-screen">
            <Navbar />
            <Hero/>
            {/* <Mema />
            <Socials/> */}
          </section>
        </main>

       

       
      </div>

  );
}
