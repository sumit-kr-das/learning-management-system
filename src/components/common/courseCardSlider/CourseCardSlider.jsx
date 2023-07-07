import React, { useRef } from "react";
// Components
import SliderButton from "../sliderButton/SliderButton";
import Layout from "../../layout/Layout";
// Icons
import { RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Stylesheet
import "./courseCardSlider.scss";

const CourseCardSlider = ({ data }) => {
  const swiperRef = useRef();
  return (
    <Layout>
      <div className="course_card_slider">
        <div className="course_card_header">
          <h2>Short and sweet courses for you</h2>
        </div>
        <div className="course_card_slider_container">
          <SliderButton swiperRef={swiperRef}>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {
                data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="course_card">
                      <div className="course_card_img">
                        <img src={item.src} alt="cart img" />
                      </div>
                      <div className="course_card_content">
                        <p className="course_title">{item.title}</p>
                        <p className="course_instructor">{item.instructor}</p>
                        <div className="pricing_section">
                          <p className="course_rating">{item.rating}</p>
                          <span>
                            <RiStarFill className="star_icon" />
                            <RiStarFill className="star_icon" />
                            <RiStarFill className="star_icon" />
                            <RiStarFill className="star_icon" />
                            <RiStarHalfLine className="star_icon" />
                          </span>
                          <p>({item.totalEnrolled})</p>
                        </div>
                        <p className="course_price">₹{item.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </SliderButton>
        </div>
      </div>
    </Layout>
  );
};

export default CourseCardSlider;
