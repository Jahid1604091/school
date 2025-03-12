import React from "react";
import minister from "@/app/assets/images/minister.jpg";
import principal from "@/app/assets/images/principal.jpg";
import Image from "next/image";
const Speech = () => {
  return (
    <section className="bg-gray-200 p-6 md:p-16">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">
        Speech
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6  bg-white">
          <div className="w-full md:w-2/5 border shadow-2xl p-2">
            <Image
              src={minister}
              alt="minister"
              className="w-full h-auto md:h-[350px]"
            />
          </div>

          <div className="w-full md:w-3/5 text-center md:text-left leading-relaxed">
            <h4 className="text-green-600 text-2xl md:text-3xl mb-6">
              Minister's Message
            </h4>
            <p className="text-gray-600 text-sm leading-loose md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tenetur minima fugit dignissimos recusandae? Animi
              velit, repellendus dolorum ex maiores cum inventore expedita
              voluptate laudantium rem minima temporibus id nemo totam possimus
              blanditiis sunt obcaecati quos facilis numquam pariatur minus?
              Possimus, quasi delectus repellat harum consequatur necessitatibus
              sit molestiae vero?
            </p>
            <button className="text-green-600 float-right p-2 px-6 my-6">
              More...
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 bg-white">
          <div className="w-full md:w-2/5 border shadow-2xl p-2">
            <Image
              src={principal}
              alt="principal"
              className="w-full h-auto md:h-[350px]"
            />
          </div>

          <div className="w-full md:w-3/5 text-center md:text-left leading-relaxed">
            <h4 className="text-green-600 text-2xl md:text-3xl mb-6">
              Principals's Message
            </h4>
            <p className="text-gray-600 text-sm leading-loose md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tenetur minima fugit dignissimos recusandae? Animi
              velit, repellendus dolorum ex maiores cum inventore expedita
              voluptate laudantium rem minima temporibus id nemo totam possimus
              blanditiis sunt obcaecati quos facilis numquam pariatur minus?
              Possimus, quasi delectus repellat harum consequatur necessitatibus
              sit molestiae vero?
            </p>
            <button className="text-green-600 float-right p-2 px-6 my-6">
              More...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speech;
