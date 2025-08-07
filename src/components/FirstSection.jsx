import React from "react";

const FirstSection = () => {
  return (
    <>
      <header role="banner">
        <h1>My Accessible Website</h1>
      </header>

      <nav role="navigation" aria-label="Main navigation">
        <ul>
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
      </nav>
    </>
  );
};

export default FirstSection;
