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
import { Link } from "react-router-dom";

const CourseCardSlider = ({ data, title }) => {
  const swiperRef = useRef();
  return (
    <Layout>
      <div className="course_card_slider">
        <div className="course_card_header">
          <h2>{title} courses for you</h2>
        </div>
        <div className="course_card_slider_container">
          <SliderButton swiperRef={swiperRef}>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '@1.50': {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {
                data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link to={`/course/${item.id}`} className="course_card">
                      <div className="course_card_img">
                        <img src={item.image_480x270} alt="cart img" />
                      </div>
                      <div className="course_card_content">
                        <p className="course_title">{item.title}</p>
                        <p className="course_instructor">{item.visible_instructors[0].display_name}</p>
                        <div className="pricing_section">
                          <p className="course_rating">{item.rating}</p>
                          <span>
                            <RiStarFill className="star_icon" />
                            <RiStarFill className="star_icon" />
                            <RiStarFill className="star_icon" />
                            <RiStarFill className="star_icon" />
                            <RiStarHalfLine className="star_icon" />
                          </span>
                          <p>({item.num_reviews})</p>
                        </div>
                        <p className="course_price">₹{item.discountPrice ? item.discountPrice : 600 }</p>
                      </div>
                    </Link>
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
