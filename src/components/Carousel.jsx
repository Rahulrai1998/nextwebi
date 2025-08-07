// Carousel.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
const images = [logo];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="carousel">
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      {images.map((img, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <img src={img} alt={`Slide ${index}`} />}
        </div>
      ))}
    </div>
  );
}
