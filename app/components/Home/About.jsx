import React from "react";
import about1 from "@/app/assets/images/about1.jpg";
import Image from "next/image";
const About = () => {
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
          About School
        </h2>
        <p className="text-gray-600 text-sm leading-loose md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem tenetur minima fugit dignissimos recusandae? Animi
          velit, repellendus dolorum ex maiores cum inventore expedita voluptate
          laudantium rem minima temporibus id nemo totam possimus blanditiis
          sunt obcaecati quos facilis numquam pariatur minus? Possimus, quasi
          delectus repellat harum consequatur necessitatibus sit molestiae vero?
        </p>
        <button className="bg-slate-950 text-white p-2 px-6 my-6">
          Learn Now
        </button>
      </div>
    </div>
  );
};

export default About;
