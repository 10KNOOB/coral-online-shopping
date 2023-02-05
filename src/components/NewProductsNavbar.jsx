import React from "react";
import { FiFilter } from "react-icons/fi";

const NewProductsNavbar = () => {
  return (
    <div className="flex justify-between">
      <nav className="flex justify-center items-center gap-x-2 sm:gap-x-[40px] cursor-pointer text-sm sm:text-base flex-wrap">
        <span className="hover:font-bold">All Products</span>
        <span className="hover:font-bold">T-Shirt</span>
        <span className="hover:font-bold">Hoodies</span>
        <span className="hover:font-bold">Jacket</span>
      </nav>
      <div className="bg-[#1E2832] flex text-white justify-center items-center px-2 sm:px-[15px] py-[5px] gap-2 text-sm sm:text-base">
        <FiFilter />
        <span>Filter</span>
      </div>
    </div>
  );
};

export default NewProductsNavbar;
