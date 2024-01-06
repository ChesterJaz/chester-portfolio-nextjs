import React from "react";
import pic from "../../../public/char.jpg";
import htmlLogo from "../../../public/html.png";
import jsLogo from "../../../public/js.png";
import cssLogo from "../../../public/css.png";
import reactLogo from "../../../public/react.png";
import pythonLogo from "../../../public/python.png";
import mongo from "../../../public/mongodb.png"
import mysql from "../../../public/mysql.png";
import firebase from "../../../public/firebase.png";
import Image from "next/image";

function Skills() {
  return (
    <section>
      <div className="container mx-auto px-4 mb-10">
        <div className="flex justify-between mt-24 items-center">


            <div className="w-1/2 rounded-lg shadow-lg py-12">
                <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-center text-gray-700">Frontend </h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-wrap justify-center gap-10 mb-5">
                <Image src={htmlLogo} height={50} width={50} />
                <Image src={cssLogo} height={50} width={50} />
                <Image src={jsLogo} height={50} width={50} />
                <Image src={reactLogo} height={50} width={50} />
                </div>
            </div>

            <div className="w-1/2 rounded-lg shadow-lg ml-5 py-12">
                <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-center text-gray-700">Backend </h2>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-wrap justify-center gap-10 mb-5">
                <Image src={mongo} height={50} width={50} />
                <Image src={firebase} height={50} width={50} />
                <Image src={pythonLogo} height={50} width={50} />
                <Image src={mysql} height={50} width={50} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
