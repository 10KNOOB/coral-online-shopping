import React from "react";
import HeroImg from "../assets/hero.jpg";
import { BsHandbag } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container flex px-5 py-5 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-roboto font-light text-4xl sm:text-[74px]">
            Collections
          </h1>
          <p className="font-roboto font-regular sm:text-[30px] sm:leading-[55px] w-full py-[52px]">
            You Can Explore Ans Shop Many Differnt Collection From Various
            Barands Here.
          </p>
          <button className="flex gap-x-5 justify-center items-center bg-[#1E2832] text-white px-5 py-2">
            <BsHandbag className="sm:text-[29px]" />
            <span className="font-roboto font-regular sm:text-[29px]">
              Shop Now
            </span>
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="border-2 border-[#afafaf] rounded-br-[160px] rounded-tl-[160px] h-[300px] sm:h-[450px] w-fit mx-auto">
            <img
              src={HeroImg}
              alt=""
              className="h-[300px] sm:h-[450px] rounded-br-[160px] rounded-tl-[160px] -ml-4 -mt-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
