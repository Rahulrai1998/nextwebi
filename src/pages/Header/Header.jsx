import React from "react";
import logo from "../../assets/logo.png";
import Carousel from "../../components/Carousel";
import styled from "styled-components";
import HeaderCarousalContent from "./HeaderCarousalContent";
import Dropdown from "../../components/Dropdown";

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
            <Dropdown
              label="Company"
              options={[
                { label: "About us", href: "#aboutus" },
                { label: "Addresses", href: "#address" },
              ]}
            />

            <Dropdown
              label="Services"
              options={[
                { label: "Web Development", href: "#web" },
                { label: "Mobile Apps", href: "#mobile" },
                { label: "Cloud Solutions", href: "#cloud" },
              ]}
            />

            <Dropdown
              label="Hire Developers"
              options={[
                { label: "Frontend Devs", href: "#frontend" },
                { label: "Backend Devs", href: "#backend" },
                { label: "Full Stack Devs", href: "#fullstack" },
              ]}
            />

            <Dropdown
              label="Solutions"
              options={[
                { label: "E-Commerce", href: "#ecom" },
                { label: "SaaS Platforms", href: "#saas" },
              ]}
            />
            <Dropdown
              label="Technologies"
              options={[
                { label: "Gen AI", href: "#ecom" },
                { label: "Web Development", href: "#saas" },
              ]}
            />
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
