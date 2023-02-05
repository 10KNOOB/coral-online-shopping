import React from "react";
import UpperNavbar from "../components/UpperNavbar";
import CategoryNavbar from "../components/CategoryNavbar";

const Navbar = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <UpperNavbar />
      <CategoryNavbar />
    </div>
  );
};

export default Navbar;
