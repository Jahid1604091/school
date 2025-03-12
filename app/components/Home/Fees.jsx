"use client";
import React, { useState } from "react";
import fees from "@/app/assets/images/fees.jpg";
import Image from "next/image";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Fees = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Bachelor of Business Administration (BBA)",
      contents: [
        {
          title: "Semester 1",
          description: "This the fisrt semester of BBA",
          fee: 35000,
        },
        {
          title: "Semester 2",
          description: "This the second semester of BBA",
          fee: 45000,
        },
        {
          title: "Semester 3",
          description: "This the third semester of BBA",
          fee: 30000,
        },
      ],
    },
    {
      title: "Computer Science & Engineering (CSE)",
      contents: [
        {
          title: "Semester 1",
          description: "This the fisrt semester of CSE",
          fee: 35000,
        },
        {
          title: "Semester 2",
          description: "This the second semester of CSE",
          fee: 45000,
        },
        {
          title: "Semester 3",
          description: "This the third semester of CSE",
          fee: 30000,
        },
      ],
    },
    {
      title: "Electrical and Electronics Engineering (EEE)",
      contents: [
        {
          title: "Semester 1",
          description: "This the fisrt semester of EEE",
          fee: 35000,
        },
        {
          title: "Semester 2",
          description: "This the second semester of EEE",
          fee: 45000,
        },
        {
          title: "Semester 3",
          description: "This the third semester of EEE",
          fee: 30000,
        },
      ],
    },
  ];

  return (
    <section className="p-6 md:p-16">
      <h2 className="text-2xl md:text-4xl font-bold text-black p-2 md:px-6 border border-black mb-4 w-fit shadow-lg">
        Fees
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-2/5">
          <Image
            src={fees}
            alt="Fees"
            className="w-full max-h-[450px] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text & Accordion */}
        <div className="w-full md:w-3/5 text-center md:text-left leading-relaxed">
          {/* Accordion */}
          <div className="w-full overflow-hidden ">
            {accordionData.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-md mb-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-3  hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                >
                  <h4 className="text-lg md:text-2xl font-semibold">{item.title}</h4>
                  <span>
                    {openIndex === index ? (
                      <AiOutlineUp className="text-gray-600" />
                    ) : (
                      <AiOutlineDown className="text-gray-600" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-2 text-gray-700 bg-white">
                  <ul>
                    {item.contents.map((content, contentIndex) => (
                      <li
                        key={contentIndex}
                        className="flex items-center justify-between gap-1 py-2 border-b border-gray-200 last:border-b-0"
                      >
                        <p>
                          <span className="font-semibold">{content.title}</span> :{" "}
                          {content.description}{" "}
                        </p>
                        <span>{content.fee} BDT</span>
                      </li>
                    ))}
                  </ul>
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;