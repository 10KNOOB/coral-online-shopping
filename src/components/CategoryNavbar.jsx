import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.svg";

const CategoryNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="container">
      <div>
        <div className="hidden md:flex justify-between py-[30px] mx-2 md:mx-0 cursor-pointer text-[14px] lg:text-[16px] ">
          <span>Jewelry & Accessories</span>
          <span>Clothing & Shoes</span>
          <span>Home & Living</span>
          <span>Wedding & Party</span>
          <span>Toys & Entertainment</span>
          <span className="hidden lg:flex">Art & Collectibles</span>
          <span className="hidden lg:flex">Craft Supplies & Tools</span>
        </div>
        <div className="md:hidden flex justify-between py-[30px] mx-2 md:mx-0 cursor-pointer text-[14px] lg:text-[16px] ">
          <span>Our Categories</span>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%]ease-in duration-500 backdrop-blur-lg z-40"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <div className="px-12 py-10">
          <img
            src={Logo}
            alt="logo"
            className="object-contain w-[180px]  h-[34px]"
          />
          <div className="flex flex-col cursor-pointer capitalize py-6 text-[14px] gap-4">
            <span>Jewelry & Accessories</span>
            <span>Clothing & Shoes</span>
            <span>Home & Living</span>
            <span>Wedding & Party</span>
            <span>Toys & Entertainment</span>
            <span>Art & Collectibles</span>
            <span>Craft Supplies & Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
