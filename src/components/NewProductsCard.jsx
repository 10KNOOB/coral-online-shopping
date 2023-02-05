import React from "react";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

import { CardDataNewProducts } from "../data/Data.jsx";

const NewProductsCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-[24px] gap-y-[34px] place-items-center">
      {CardDataNewProducts.map((item) => {
        return (
          <div key={item.id}>
            <div className="relative group overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-[200px] h-[150px]  sm:w-[312px] sm:h-[400px] object-cover"
              />
              <div className="absolute flex justify-between w-full bg-[#1E2832] text-white p-[16px]  -translate-y-[0%] transition ease-in group-hover:-translate-y-[100%] duration-300">
                <span className="flex justify-between items-center gap-x-2  sm:gap-x-[25px]">
                  <FaRegHeart className="text-sm sm:text-[24px]" />
                  <MdOutlineSearch className="text-sm sm:text-[24px]" />
                </span>
                <span className="flex justify-center items-center gap-x-[8px]">
                  <BsHandbag className="text-sm sm:text-[24px]" />
                  <h6 className="text-sm sm:text-18px hidden sm:flex">
                    Shop Now
                  </h6>
                </span>
              </div>
              {item?.badge_sale && (
                <div className="w-[52px] h-[24px] bg-[#1E2832] absolute top-[22px] text-center text-white">
                  {item.badge_sale}
                </div>
              )}
              {item?.badge_hot && (
                <div className="w-[52px] h-[24px] bg-[#FF6F61] absolute top-[22px] text-center text-white">
                  {item.badge_hot}
                </div>
              )}
            </div>
            <div className="px-1.5">
              <div className="pt-[18px] pb-[15px] text-xs sm:text-[16px] font-semibold">
                {item.name}
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777] text-sm sm:text-[16px]">
                  {item.type}
                </span>
                <span className="text-sm sm:text-[16px] font-semibold">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewProductsCard;
