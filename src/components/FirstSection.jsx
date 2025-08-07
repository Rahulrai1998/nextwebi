import React from "react";
import logo from "../assets/logo.png";
import Carousel from "./Carousel";

const FirstSection = () => {
  return (
    <>
      <section aria-label="Navigation section" className="nav-container">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <img src={logo} alt="company logo" className="logo-img" />
          <ul className="page-nav-list">
            <li>
              <a href="#home">Company</a>
            </li>
            <li>
              <a href="#about">Services</a>
            </li>
            <li>
              <a href="#services">Hire Developers</a>
            </li>
            <li>
              <a href="#contact">Solutions</a>
            </li>
            <li>
              <a href="#contact">Technologies</a>
            </li>
            <li>
              <a href="#contact">Ourwork</a>
            </li>
          </ul>
          <button className="contact-us-btn">Contact Us</button>
        </nav>
      </section>
      <section>
        <Carousel />
      </section>
    </>
  );
};

export default FirstSection;
