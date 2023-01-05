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
        <div className="detail1">
          <span className="detail-icon">
            <BiLocationPlus />
          </span>{" "}
          <span className="detail-p">Location</span>
          <p>United States</p>
        </div>
        <div className="detail2">
          <span className="detail-icon">
            <BsFillCalendar2CheckFill />
          </span>{" "}
          <span className="detail-p">Chack in</span>
          <p>10 jun 2021</p>
        </div>
        <div className="detail3">
          <span className="detail-icon">
            <BsFillCalendar2CheckFill />
          </span>{" "}
          <span className="detail-p">Chak out</span>
          <p>15 jun 2021</p>
        </div>
        <div className="detail4">
          <span className="detail-icon">
            <BsFillPersonFill />
          </span>{" "}
          <span className="detail-p">Rooms for</span>
          <p>1 room 2 guests</p>
        </div>
        <div className="detail-button">
          <a href="#">
            <button className="btn-detail">
              <span className="search">
                <AiOutlineSearch /> Search
              </span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
