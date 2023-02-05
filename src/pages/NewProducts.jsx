import React from "react";
import NewProductsNavbar from "../components/NewProductsNavbar";
import NewProductsCard from "../components/NewProductsCard";

const NewProducts = () => {
  return (
    <div className="container my-[50px] sm:my-[140px]">
      <h1 className="text-[30px] sm:text-[45px] font-medium font-roboto text-center mb-[40px]">
        New Products
      </h1>
      {/* New products Navbar */}
      <NewProductsNavbar />
      <div className="pb-[30px]"></div>
      {/* New Products Card */}
      <NewProductsCard />
    </div>
  );
};

export default NewProducts;
