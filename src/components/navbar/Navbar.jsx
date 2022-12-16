import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <section className="nav">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo-picture" />
        <p>Hotela</p>
      </div>
      <div className="links">
        <ul className="links-container">
          <li>
            <a href="#">Booking</a>
          </li>
          <li>
            <a href="#">Facility</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <button className="login-btn">Login</button>
    </section>
  );
};

export default Navbar;
