import React from "react";
import { FaBell } from "react-icons/fa";

const Notice = () => {
  return (
    <div className="p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mt-6 md:px-16 bg-gray-100 ">
      {/* Heading with right-angled design */}
      <h3 className="text-lg font-semibold flex items-center gap-2 bg-green-700 px-4 py-2 text-white relative w-full md:w-auto">
        📢 Latest Notices :
        <span className="hidden md:block md:absolute md:-right-3 h-full w-4 bg-green-700 clip-triangle"></span>
      </h3>

      {/* Notice List */}
      <ul className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6 w-full md:w-auto mt-3 md:mt-0">
        <li>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-green-600 transition duration-200"
          >
            <FaBell className="text-green-700" /> Annual Sports Day - 2025
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-green-700 transition duration-200"
          >
            <FaBell className="text-green-700" /> Science Fair - 2025
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-green-700 transition duration-200"
          >
            <FaBell className="text-green-700" /> Parent-Teacher Meeting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Notice;
