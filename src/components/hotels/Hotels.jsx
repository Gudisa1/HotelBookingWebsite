import React from "react";
import "./hotels.css";
import hotel1 from "../../assets/hotel1.jpg";
import hotel2 from "../../assets/hotel2.jpg";
import hotel3 from "../../assets/hotel3.jpg";
import { FcRating } from "react-icons/fc";
const Hotels = () => {
  return (
    <section>
      <div className="hotels">
        <div className="hotels-motto">
          <div className="hotels-motto-desc">
            <h2 className="heading-secondary">Our most popular Hotels</h2>
            <p className="motto-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <a href="#">
            <button className="btn-hotels">View All</button>
          </a>
        </div>
        <div className="hotels-cart-container">
          <div className="hotels-cart">
            <img src={hotel1} alt="Hotel Picture" className="hotel-img" />
            <p className="hotel-location">London NW8 7JT England</p>
            <h3 className="heading-teritary">Danubis Hotel Regents Park</h3>
            <span className="hotel-price">$200 per Night</span>{" "}
            <span className="icon-rating">
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
            </span>
            <span className="rating">4.8</span>
          </div>
          <div className="hotels-cart">
            <img src={hotel2} alt="Hotel Picture" className="hotel-img" />
            <p className="hotel-location">London NW8 7JT England</p>
            <h3 className="heading-teritary">The Resident Soho</h3>
            <span className="hotel-price">$200 per Night</span>{" "}
            <span className="icon-rating">
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
            </span>
            <span className="rating">4.8</span>
          </div>
          <div className="hotels-cart">
            <img src={hotel3} alt="Hotel Picture" className="hotel-img" />
            <p className="hotel-location">London NW8 7JT England</p>
            <h3 className="heading-teritary">London Bridge Hotel</h3>
            <span className="hotel-price">$200 per Night</span>{" "}
            <span className="icon-rating">
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
            </span>
            <span className="rating">4.8</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
