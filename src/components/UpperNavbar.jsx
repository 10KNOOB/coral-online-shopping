import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { BsPerson, BsHandbag } from "react-icons/bs";
import Logo from "../assets/logo.svg";

const UpperNavbar = () => {
  return (
    <div className="relative ">
      <div className="container py-[31px] border-b">
        <div className="flex justify-between items-center mx-2 md:mx-0">
          <MdOutlineSearch size={20} className=" cursor-pointer" />
          <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
            <img
              src={Logo}
              alt="logo"
              className="object-contain w-[180px]  h-[34px]"
            />
          </div>
          <div className="flex gap-x-2 sm:gap-x-[24px] cursor-pointer">
            <div className="flex justify-center items-center gap-x-[8px]">
              <BsPerson size={20} />
              <span className="hidden sm:flex text-[14px] lg:text-[16px] ">
                Account
              </span>
            </div>
            <div className="flex justify-center items-center gap-x-[8px]">
              <BsHandbag size={20} />
              <span className="hidden sm:flex text-[14px] lg:text-[16px] ">
                Shoping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
