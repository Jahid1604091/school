"use client";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { academics } from "../utils/misc";
import Link from "next/link";

const Submenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const closeMenu = (e) => {
    if (!e.target.closest(".menu-container")) {
      setIsMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  const menuItems = [
    { name: "BUFT", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Academics", subItems: academics },
    { name: "Admission", link: "/contact" },
    { name: "Scholarship", link: "/contact" },
    { name: "Research", link: "/contact" },
    { name: "Collaborations", link: "/contact" },
    { name: "Events & News", link: "/contact" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative menu-container">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 bg-gray-200 rounded"
      >
        <FiMenu size={24} />
      </button>

      {/* Menu List */}
      <ul
        className={`absolute z-50 md:static top-full left-0 w-full md:w-auto bg-white border border-gray-200 shadow-lg rounded flex flex-col md:flex-row md:items-center justify-center p-2 space-y-2 md:space-y-0 md:space-x-4 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {menuItems.map((item, index) => (
          <li key={index} className="relative font-semibold">
            {item.subItems ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(index);
                }}
                className="w-full md:w-auto text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between gap-1 md:gap-2"
              >
                {item.name}{" "}
                <FiChevronDown
                  className="transition-transform duration-300"
                  style={{
                    transform:
                      openDropdown === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            ) : (
              <Link
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown Menu */}
            {item.subItems && (
              <div
                className={`absolute top-full mt-1 z-50 bg-white border border-gray-200 shadow-lg rounded w-48 transition-all duration-300 ease-in-out transform ${
                  openDropdown === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <ul className="flex flex-col">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
