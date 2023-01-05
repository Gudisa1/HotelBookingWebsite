import React from "react";
import "./header.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import hotel from "../../assets/hotel.jpg";
import { BiLocationPlus } from "react-icons/bi";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <header className="header">
      <div className="header-description">
        <h1>Find Your Perfect place to stay</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          ab?
        </p>
        <div className="play">
          <span className="icon">
            <AiOutlinePlayCircle />
          </span>
          <span className="icon-desc">Watch Video</span>
        </div>
      </div>

      <div className="header-img">
        <img src={hotel} alt="Hotel Hero Image" className="header-img-hero" />
      </div>
      <div className="header-details">
        <div className="header-details-description">
          <BiLocationPlus className="icon-box" />
          <p className="icon-desc">Location</p>
          <p className="icon-p">United States</p>
        </div>
        <div className="header-details-description">
          <BsFillCalendar2CheckFill className="icon-box" />
          <p className="icon-desc">Chack in</p>
          <p className="icon-p">10 jun 2021</p>
        </div>
        <div className="header-details-description">
          <BsFillCalendar2CheckFill className="icon-box" />
          <p className="icon-desc">Chak Out</p>
          <p className="icon-p">15 jun 2021</p>
        </div>
        <div className="header-details-description">
          <BiLocationPlus className="icon-box" />
          <p className="icon-desc">Rooms for</p>
          <p className="icon-p">1 room 2 guests</p>
        </div>

        <div className="btn-container">
          <AiOutlineSearch className="icon-search" />
          <a href="#">
            <button className="btn-search">Search</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
