import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import newLogo from "../../assets/2lo.png";
import img from "../../assets/img.png";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img className="logo" src={assets.logo} alt="" /> */}
      <img className="profile" src={img} alt="" />
    </div>
  );
};

export default Navbar;
