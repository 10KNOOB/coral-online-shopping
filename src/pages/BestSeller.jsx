import React from "react";
import SellersProductsNavbar from "../components/SellersProductsNavbar";
import SellerCarousel from "../components/SellerCarousel";

const BestSeller = () => {
  return (
    <div className="container my-[50px] sm:my-[140px]">
      <h1 className="text-[30px] sm:text-[45px] font-medium font-roboto text-center mb-[40px]">
        Best Sellers
      </h1>
      {/* New products Navbar */}
      <SellersProductsNavbar />

      <div className="pb-[30px]"></div>
      {/* Seller Products carousel */}
      <SellerCarousel />
    </div>
  );
};

export default BestSeller;
