import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Socials() {
  return (
    <div>
         <section>
          <div className="text-5xl flex justify-center gap-10 text-gray-600 py-5">
            <a href="https://www.linkedin.com/in/chester-jazmin-68507a253/">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/ChesterJaz">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/cheschesj123/">
              <FaFacebook />
            </a>
          </div>
        </section>
    </div>
  )
}

export default Socials