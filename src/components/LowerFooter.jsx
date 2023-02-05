import React from "react";
import PaymentImg from "../assets/icons_payment.png";
import { BsArrowUpShort } from "react-icons/bs";

const LowerFooter = () => {
  return (
    <div className="relative bg-[#1E2832]">
      <div className="container py-[14px] border-b">
        <div className="flex justify-between items-center mx-2 md:mx-0 flex-wrap gap-5">
          <h6 className="font-semibold text-white text-[14px]">
            © 2022 Coral , Inc.
          </h6>
          <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 hidden sm:flex">
            <img
              src={PaymentImg}
              alt="PaymentImg"
              className="object-contain w-[283px]  h-[24px]"
            />
          </div>
          <img
            src={PaymentImg}
            alt="PaymentImg"
            className="object-contain w-[283px]  h-[24px] flex sm:hidden"
          />

          <span className="font-semibold text-white text-[14px] flex justify-center items-center cursor-pointer">
            Scroll to top
            <BsArrowUpShort size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
