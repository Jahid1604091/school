import React from "react";
import { IoFolderOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const stats = [
  { count: 134, label: "Our Online Courses", icon: <IoFolderOutline size={18} /> },
  { count: 299, label: "Academic Programs", icon: <SlBadge size={18} /> },
  { count: 684, label: "Certified Students", icon: <FaRegAddressCard size={18} /> },
  { count: 941, label: "Enrolled Students", icon: <FaRegUser size={18} /> },
];

const Count = () => {
  return (
    <div className="md:absolute -bottom-10 flex justify-center items-center w-full py-10">
      <div className="rounded-xl p-6 text-center md:z-50 w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-[200px] mx-auto flex flex-col items-center justify-center gap-2"
            >
              <span className="border border-solid rounded-full bg-blue-200 p-3 text-blue-800">
                {item.icon}
              </span>
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-800">
                  {item.count}
                </h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
