import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/logo.jpg";
import { FiLogIn } from "react-icons/fi";
import Submenu from "./Submenu";

const Header = () => {
  return (
    <>
      <div className="bg-green-700 text-white flex items-center justify-between gap-4 p-4">
        <div className="flex items-center justify-start gap-2">
          <Image src={logo} alt="Logo" height={100} width={100} />
          <div className="hidden md:block">
            <h2 className="text-xl md:text-4xl font-semibold">
              SHAHID TITUMIR ACADEMY
            </h2>
            <h5 className="text-xl md:text-2xl">Manikganj, School Code</h5>
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-1">
          <button className="bg-blue-700 p-1 border-b-2 flex items-center justify-center gap-1">
            <FiLogIn /> Login
          </button>
          <p>+8801975150941</p>
        </div>
      </div>
      <Submenu />
    </>
  );
};

export default Header;
