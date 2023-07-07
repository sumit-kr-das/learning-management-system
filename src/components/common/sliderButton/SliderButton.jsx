import React from "react";
// Icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// Stylesheet
import "./sliderButton.scss";

const SliderButton = ({ children, swiperRef }) => {
  return (
    <div className="slider_button_container">
      <div
        className="slider_button left_btn"
        onClick={() => swiperRef.current.slidePrev()}
      >
        <RiArrowLeftSLine />
      </div>
      {children}
      <div
        className="slider_button right_btn"
        onClick={() => swiperRef.current.slideNext()}
      >
        <RiArrowRightSLine />
      </div>
    </div>
  );
};

export default SliderButton;
