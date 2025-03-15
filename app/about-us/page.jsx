import React from "react";
import about1 from "@/app/assets/images/about1.jpg";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <section className="p-6 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 ">
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
        </div>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold  p-2 md:px-6 border border-black mb-4 w-fit shadow-lg mt-6">
        History
      </h2>
      <p className="text-gray-600 text-sm leading-loose md:text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        molestiae ducimus adipisci dolores quae error optio dolorum minus itaque
        veniam saepe soluta dicta sint voluptatibus expedita cumque dignissimos,
        quasi repudiandae, id reiciendis quos nesciunt! Quae ea veniam in
        quibusdam. Ab praesentium fugit aspernatur explicabo! Molestias maiores
        esse id quia commodi! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Et commodi, rem, ab officiis voluptate deleniti culpa repellendus
        ratione, quas vel a soluta quo non. Veritatis reiciendis nihil, sequi
        nulla obcaecati soluta. Provident et magnam officia! Hic, beatae illo!
        Cumque nemo molestias voluptates ea maxime perspiciatis aliquid saepe
        dolorum culpa repellendus.
      </p>
      <h2 className="text-2xl md:text-4xl font-bold  p-2 md:px-6 border border-black mb-4 w-fit shadow-lg mt-6">
        Vision
      </h2>
      <p className="text-gray-600 text-sm leading-loose md:text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        molestiae ducimus adipisci dolores quae error optio dolorum minus itaque
        veniam saepe soluta dicta sint voluptatibus expedita cumque dignissimos,
        quasi repudiandae, id reiciendis quos nesciunt! Quae ea veniam in
        quibusdam. Ab praesentium fugit aspernatur explicabo! Molestias maiores
        esse id quia commodi!
      </p>
    </section>
  );
};

export default page;
