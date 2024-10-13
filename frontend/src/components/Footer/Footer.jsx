import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import newLogo from "../../assets/update_logo.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={newLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            corporis. Est eos saepe et illum eum, iure vero odit nulla!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>1-212-456-7890</li>
            <li>contact@mealexpress.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Mealexpress.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
