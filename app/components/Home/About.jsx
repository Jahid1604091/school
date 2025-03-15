import React from "react";
import about1 from "@/app/assets/images/about1.jpg";
import Image from "next/image";
import Link from "next/link";
const About = ({speech}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-16">
      <div className="w-full md:w-2/5">
        <Image
          src={about1}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-3/5 text-center md:text-left leading-relaxed">
        <h2 className="text-2xl md:text-4xl font-bold text-white bg-blue-700 p-2 md:px-6 border border-black mb-4 w-fit shadow-lg">
          {speech.speechBy}
        </h2>
        <p className="text-gray-600 text-sm leading-loose md:text-lg mb-6">
          {speech.speech}
        </p>
        <Link href='/about-us' className="bg-slate-950 text-white p-2 px-6">
          Learn Now
        </Link>
      </div>
    </div>
  );
};

export default About;
