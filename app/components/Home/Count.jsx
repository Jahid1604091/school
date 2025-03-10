import React from "react";
import { IoFolderOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const stats = [
  { count: 134, label: "Our Online Courses", icon: <IoFolderOutline size={18} /> },
  { count: 299, label: "Academic Programs", icon:<SlBadge size={18}/> },
  { count: 684, label: "Certified Students",icon:<FaRegAddressCard size={18}/> },
  { count: 941, label: "Enrolled Students",icon:<FaRegUser size={18}/> },
];

const Count = () => {
  return (
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-xl p-6 text-center z-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-36 justify-center items-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center w-52 flex items-center justify-center gap-1"
          >
            <span className="border border-solid rounded-full bg-blue-300 p-2 text-blue-800">{item.icon}</span>
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
  );
};

export default Count;
