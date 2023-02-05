import React from "react";
import Big_Logo from "../assets/brand_banner/logo_big.png";
import Samll_Logo from "../assets/brand_banner/logo_small.png";

const BrandBanner = () => {
  return (
    <div className="brand-banner ">
      <div className="container h-[700px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-[120px] sm:pt-[261px] overflow-hidden">
          <div className="hidden sm:flex "></div>
          <div className="relative">
            <img src={Samll_Logo} alt="" className="h-[81px] w-[191px]" />
            <p className="text-[20px] sm:text-[26px] font-roboto pt-[56px] pb-[66px] text-white">
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </p>
            <button className="flex gap-x-5 justify-center items-center bg-white text-black px-5 py-2">
              <span className="font-roboto font-regular sm:text-[29px]">
                See Collection
              </span>
            </button>
            <div className="absolute translate-x-[150px] -translate-y-[580px]">
              <img src={Big_Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;
