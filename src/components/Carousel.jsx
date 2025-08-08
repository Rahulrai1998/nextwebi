import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children }) => {
  function CustomLeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button onClick={onClick} className="left-arrow">
        &#10094;
      </button>
    );
  }

  function CustomRightArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button onClick={onClick} className="right-arrow">
        &#10095;
      </button>
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
