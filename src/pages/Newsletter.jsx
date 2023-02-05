import React from "react";
import N1 from "../assets/news_letter/n1.png";
import N2 from "../assets/news_letter/n2.png";
import N3 from "../assets/news_letter/n3.png";
import N4 from "../assets/news_letter/n4.png";
import N5 from "../assets/news_letter/n5.png";
import N6 from "../assets/news_letter/n6.png";
import { BsInstagram } from "react-icons/bs";
import { NewsletterData } from "../data/Data";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container py-[100px]">
        <h1 className="text-[25px] sm:text-[45px] font-medium font-roboto text-center mb-[60px]">
          Follow products and discounts on Instagram
        </h1>

        <div className="flex justify-evenly gap-4 flex-wrap md:flex-nowrap">
          {NewsletterData.map((item) => {
            return (
              <div key={item.id} className="relative group ">
                <img
                  src={item.img}
                  alt=""
                  className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] object-contain"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center transition duration-500 ease-in-out">
                  <BsInstagram className="text-white text-[50px] opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-[70px]">
          <h1 className="text-[25px] sm:text-[45px] font-medium font-roboto text-center">
            Or subscribe to the newsletter
          </h1>
        </div>

        <div className="max-w-[700px] mx-auto flex ">
          <div className="border-b-2 border-black  w-full p-2 mx-2">
            <input
              type="email"
              placeholder="Email Address... "
              className="bg-transparent  outline-none px-2 w-full text-sm sm:text-[16px]"
            />
          </div>
          <button className="border-b-2 border-black">
            <div className="px-2 text-sm sm:text-[16px]">SUBMIT</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
