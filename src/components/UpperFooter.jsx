import React from "react";
import Logo from "../assets/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const UpperFooter = () => {
  return (
    <div className="container pt-[70px] pb-[45px] sm:pt-[140px] sm:pb-[90px] ">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <div className="grid gap-y-10 col-span-2 md:col-span-1 pl-5">
          <img
            src={Logo}
            alt="Logo"
            className="object-contain w-[180px]  h-[34px]"
          />
          <p className="text-[#292929] text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex gap-x-10">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaLinkedinIn size={20} />
            <FaDribbble size={20} />
          </div>
        </div>

        <div className="flex flex-col gap-y-5  text-[#292929] text-[14px] pt-10 sm:pt-0 pl-5">
          <b className="pb-5">CATALOG</b>
          <span>Necklaces</span>
          <span>Hoodies</span>
          <span>Jewelry Box</span>
          <span>T-shirt</span>
          <span>Jacket</span>
        </div>

        <div className="flex flex-col gap-y-5  text-[#292929] text-[14px] pt-10 sm:pt-0 pl-5">
          <b className="pb-5">ABOUT US</b>
          <span>Our Producers</span>
          <span>Sitemap</span>
          <span>FAQ</span>
          <span>About Us</span>
          <span>Terms & Conditions</span>
        </div>

        <div className="flex flex-col gap-y-5 text-[#292929] text-[14px] pt-10 sm:pt-0 pl-5">
          <b className="pb-5">CUSTOMER SERVICES</b>
          <span>Contact Us</span>
          <span>Track Your Order</span>
          <span>Product Care & Repair</span>
          <span>Book an Appointment</span>
          <span>Shipping & Returns</span>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
