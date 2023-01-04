import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-img" />
        <p className="logo-name">Hotelo</p>
      </div>
      <div>
        <ul className="nav-links">
          <a href="#">
            <li className="nav-single-link">Booking</li>
          </a>
          <a href="#">
            <li className="nav-single-link">Facilities</li>
          </a>
          <a href="#">
            <li className="nav-single-link">About Us</li>
          </a>
          <a href="#">
            <li className="nav-single-link">Location</li>
          </a>
          <a href="#">
            <li className="nav-single-link">Contact</li>
          </a>
        </ul>
      </div>
      <div className="login">
        <a href="#">
          <button className="btn-login">Login</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
