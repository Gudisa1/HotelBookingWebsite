import React from "react";
import "./facility.css";
import { GrCloudComputer } from "react-icons/gr";
const Facility = () => {
  return (
    <section className="section-facility">
      <div className="facility-des">
        <h2 className="heading-secondary">
          We do our best facilities provide you
        </h2>
        <p className="facility-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
        </p>
        <a href="#">
          <button className="btn-contact">Contact Now</button>
        </a>
      </div>
      <div className="facility-fun">
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
        <div className="facility-service">
          <GrCloudComputer className="facility-icon" />
          <p className="icon-p">Private WorkSpace</p>
        </div>
      </div>
    </section>
  );
};

export default Facility;
