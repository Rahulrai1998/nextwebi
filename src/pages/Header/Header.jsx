import React from "react";
import logo from "../../assets/logo.png";
import Carousel from "../../components/Carousel";
import styled from "styled-components";
import HeaderCarousalContent from "./HeaderCarousalContent";

const Header = () => {
  return (
    <>
      <header
        aria-label="Navigation section"
        className="nav-container"
        id="top-of-page"
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
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
          <button className="contact-us-btn" aria-label="Contact our team">
            Contact Us
          </button>
        </nav>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured highlights"
          style={{ width: "85%", margin: "7rem auto" }}
        >
          <Carousel>
            <HeaderCarousalContent />
            <HeaderCarousalContent />
            <HeaderCarousalContent />
          </Carousel>
        </div>
      </header>
    </>
  );
};

export default Header;
