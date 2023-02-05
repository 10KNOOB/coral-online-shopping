import React from "react";
import Brand1 from "../assets/brand/brand-1.png";
import Brand2 from "../assets/brand/brand-2.png";
import Brand3 from "../assets/brand/brand-3.png";
import Brand4 from "../assets/brand/brand-4.png";
import Brand5 from "../assets/brand/brand-5.png";

const Brand = () => {
  return (
    <div className="container">
      <div className="py-[90px] flex flex-row flex-wrap justify-between items-center gap-5">
        <img
          src={Brand1}
          alt=""
          className="w-[100px] md:w-[200px] h-[35px] md:h-[70px]"
        />
        <img
          src={Brand5}
          alt=""
          className="w-[100px] md:w-[200px] h-[35px] md:h-[70px]"
        />
        <img
          src={Brand3}
          alt=""
          className="w-[100px] md:w-[200px] h-[35px] md:h-[70px]"
        />
        <img
          src={Brand4}
          alt=""
          className="w-[100px] md:w-[200px] h-[35px] md:h-[70px]"
        />
        <img
          src={Brand2}
          alt=""
          className="w-[100px] md:w-[200px] h-[35px] md:h-[70px]"
        />
      </div>
    </div>
  );
};

export default Brand;
