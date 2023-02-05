import React from "react";
import Img_cat_1 from "../assets/popular_styles/image-category-1.jpg";
import Img_cat_2 from "../assets/popular_styles/image-category-2.jpg";
import Img_cat_3 from "../assets/popular_styles/image-category-3.jpg";
import Img_cat_4 from "../assets/popular_styles/image-category-4.jpg";
import Img_cat_5 from "../assets/popular_styles/image-category-5.jpg";

const PopularItems = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-[24px] place-items-center text-[12px] sm:text-base">
        {/* Big Image */}
        <div className="col-span-2 row-span-2  relative">
          <div className="relative group overflow-hidden">
            <img
              src={Img_cat_1}
              alt=""
              className="w-[448px] h-[348px] sm:w-[648px] sm:h-[648px] object-cover "
            />

            <div className="absolute flex justify-between w-full bg-[#1E2832] text-white p-4  -translate-y-[0%] transition ease-in group-hover:-translate-y-[100%] duration-300">
              <span>Jacket</span>
              <span>103 Product</span>
            </div>
          </div>
          <div className="absolute -rotate-90 top-[45%] -left-[310px] uppercase text-[34px] lg:flex hidden">
            Explore new and popular styles
          </div>
        </div>

        {/* Small Four Image */}
        <div className="relative group overflow-hidden">
          <img
            src={Img_cat_2}
            alt=""
            className="w-[200px] h-[200px]  sm:w-[312px] sm:h-[312px] object-cover"
          />
          <div className="absolute flex justify-between w-full bg-[#1E2832] text-white p-2  -translate-y-[0%] transition ease-in group-hover:-translate-y-[100%] duration-300">
            <span>Jacket</span>
            <span>103 Product</span>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={Img_cat_3}
            alt=""
            className="w-[200px] h-[200px]  sm:w-[312px] sm:h-[312px] object-cover"
          />
          <div className="absolute flex justify-between w-full bg-[#1E2832] text-white p-2  -translate-y-[0%] transition ease-in group-hover:-translate-y-[100%] duration-300">
            <span>Jacket</span>
            <span>103 Product</span>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={Img_cat_4}
            alt=""
            className="w-[200px] h-[200px]  sm:w-[312px] sm:h-[312px] object-cover"
          />
          <div className="absolute flex justify-between w-full bg-[#1E2832] text-white p-2  -translate-y-[0%] transition ease-in group-hover:-translate-y-[100%] duration-300">
            <span>Jacket</span>
            <span>103 Product</span>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src={Img_cat_5}
            alt=""
            className="w-[200px] h-[200px]  sm:w-[312px] sm:h-[312px] object-cover"
          />
          <div className="absolute flex justify-between w-full bg-[#1E2832] text-white p-2  -translate-y-[0%] transition ease-in group-hover:-translate-y-[100%] duration-300">
            <span>Jacket</span>
            <span>103 Product</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
