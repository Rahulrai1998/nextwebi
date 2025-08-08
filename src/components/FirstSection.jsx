import React from "react";
import logo from "../assets/logo.png";

import Carousel from "./Carousel";
import styled from "styled-components";
import FirstSecCarousalContent from "./FirstSecCarousalContent";

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
        <div style={{ width: "70%", margin: "7rem auto" }}>
          <Carousel>
            <FirstSecCarousalContent />
            <FirstSecCarousalContent />
            <FirstSecCarousalContent />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default FirstSection;

const BgSection = styled.section`
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("assets/nav-bg.jpg") no-repeat center/cover;
    z-index: -1;
    opacity: 0.9;
    filter: brightness(60%);
    z-index: -1;
    top: 0;
  }
`;
