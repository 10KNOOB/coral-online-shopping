import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import { CardDataNewProducts } from "../data/Data.jsx";

const SellerCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {CardDataNewProducts.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div>
                <div className="">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[200px] h-[150px]  sm:w-[312px] sm:h-[400px] object-cover"
                  />

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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SellerCarousel;
