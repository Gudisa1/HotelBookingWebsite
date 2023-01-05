import React from "react";
import "./facility.css";
import { RiComputerLine } from "react-icons/ri";
import { TbParking } from "react-icons/tb";
const Facility = () => {
  return (
    <section className="section">
      <div className="facility">
        <div className="facility-desc">
          <h2 className="heading-secondary">
            We do our best facilities provide you
          </h2>
          <p className="facility-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy{" "}
          </p>
          <a href="#">
            <button className="btn-contact">Contact Now</button>
          </a>
        </div>
        <div className="facility-icons">
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
          <div className="facility-icons-layout">
            <TbParking className="facility-icon" />
            <p className="icon-description">Parking Area</p>
          </div>
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
          <div className="facility-icons-layout">
            <RiComputerLine className="facility-icon" />
            <p className="icon-description">Private Workspace</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
