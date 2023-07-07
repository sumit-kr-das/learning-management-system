import React, { useRef } from "react";
// Components
import Layout from "../../../layout/Layout";
import Heading from "../../heading/Heading";
import SliderButton from "../../sliderButton/SliderButton";
// Icons
import { RiPlayFill } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Stylesheet
import "./myLearning.scss";

const MyLearning = () => {
  const swiperRef = useRef();
  return (
    <Layout>
      <section className="my_learning">
        <div className="my_learning_heading">
          <Heading text="Let's start learning, Sumit Kumar" />
          <button className="my_learning_btn">My Learning</button>
        </div>
        <div className="learning_slider">
          <SliderButton swiperRef={swiperRef}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <div className="learning_single_item">
                  <div className="left">
                    <img
                      src="https://mp4-c.udemycdn.com/2020-10-22_22-03-44-fa922371ecfbb4c690188869e79752d0/1/thumb-1.jpg?Expires=1688671247&Signature=gmUlirRGYQyzIA74C~0mbSaIeYUyoRZakbFBdIz~phBjMpw7NX7EeqeJpAQCNweZGbbw6V9Qqw4JhfM9pzBBWf8b~h9vEjktmowTIccOCMSEOUcN1HOLVFIMHmHcFP6x3RJ8Bf9OazRG8vlLEhiuHavenI-jKp4HGW1GB~lj8nuf8GefPRqFshsW5RBeCRwjk8Wn-pCa1EDVPFfabNA~TxlVhiQL6afbwoTyMwDmdkRcOdBQTwK5t4Fi6evF36bTflZA-Xohl28~HZKclXTtiM66GUYJYwtiCvppR0CqEIEyDml8xmmozeaE1PsBQCGaUuzuRwTOKyznKXHRdjzxtQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
                      alt="thumbnil"
                    />
                    <div className="learning_overlay">
                      <div className="play_container">
                        <RiPlayFill />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p className="title">
                        Object Oriented Programming in Javascript - Complete
                        Course
                      </p>
                      <h3 className="headline">
                        How to create objects & their properties in Javascript
                      </h3>
                    </div>
                    <div className="lecture">
                      <p>Lecture</p>
                      <p> • </p>
                      <p>9m</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="learning_single_item">
                  <div className="left">
                    <img
                      src="https://mp4-c.udemycdn.com/2020-10-22_22-03-44-fa922371ecfbb4c690188869e79752d0/1/thumb-1.jpg?Expires=1688671247&Signature=gmUlirRGYQyzIA74C~0mbSaIeYUyoRZakbFBdIz~phBjMpw7NX7EeqeJpAQCNweZGbbw6V9Qqw4JhfM9pzBBWf8b~h9vEjktmowTIccOCMSEOUcN1HOLVFIMHmHcFP6x3RJ8Bf9OazRG8vlLEhiuHavenI-jKp4HGW1GB~lj8nuf8GefPRqFshsW5RBeCRwjk8Wn-pCa1EDVPFfabNA~TxlVhiQL6afbwoTyMwDmdkRcOdBQTwK5t4Fi6evF36bTflZA-Xohl28~HZKclXTtiM66GUYJYwtiCvppR0CqEIEyDml8xmmozeaE1PsBQCGaUuzuRwTOKyznKXHRdjzxtQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
                      alt="thumbnil"
                    />
                    <div className="learning_overlay">
                      <div className="play_container">
                        <RiPlayFill />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p className="title">
                        Object Oriented Programming in Javascript - Complete
                        Course
                      </p>
                      <h3 className="headline">
                        How to create objects & their properties in Javascript
                      </h3>
                    </div>
                    <div className="lecture">
                      <p>Lecture</p>
                      <p> • </p>
                      <p>9m</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="learning_single_item">
                  <div className="left">
                    <img
                      src="https://mp4-c.udemycdn.com/2020-10-22_22-03-44-fa922371ecfbb4c690188869e79752d0/1/thumb-1.jpg?Expires=1688671247&Signature=gmUlirRGYQyzIA74C~0mbSaIeYUyoRZakbFBdIz~phBjMpw7NX7EeqeJpAQCNweZGbbw6V9Qqw4JhfM9pzBBWf8b~h9vEjktmowTIccOCMSEOUcN1HOLVFIMHmHcFP6x3RJ8Bf9OazRG8vlLEhiuHavenI-jKp4HGW1GB~lj8nuf8GefPRqFshsW5RBeCRwjk8Wn-pCa1EDVPFfabNA~TxlVhiQL6afbwoTyMwDmdkRcOdBQTwK5t4Fi6evF36bTflZA-Xohl28~HZKclXTtiM66GUYJYwtiCvppR0CqEIEyDml8xmmozeaE1PsBQCGaUuzuRwTOKyznKXHRdjzxtQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
                      alt="thumbnil"
                    />
                    <div className="learning_overlay">
                      <div className="play_container">
                        <RiPlayFill />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p className="title">
                        Object Oriented Programming in Javascript - Complete
                        Course
                      </p>
                      <h3 className="headline">
                        How to create objects & their properties in Javascript
                      </h3>
                    </div>
                    <div className="lecture">
                      <p>Lecture</p>
                      <p> • </p>
                      <p>9m</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="learning_single_item">
                  <div className="left">
                    <img
                      src="https://mp4-c.udemycdn.com/2020-10-22_22-03-44-fa922371ecfbb4c690188869e79752d0/1/thumb-1.jpg?Expires=1688671247&Signature=gmUlirRGYQyzIA74C~0mbSaIeYUyoRZakbFBdIz~phBjMpw7NX7EeqeJpAQCNweZGbbw6V9Qqw4JhfM9pzBBWf8b~h9vEjktmowTIccOCMSEOUcN1HOLVFIMHmHcFP6x3RJ8Bf9OazRG8vlLEhiuHavenI-jKp4HGW1GB~lj8nuf8GefPRqFshsW5RBeCRwjk8Wn-pCa1EDVPFfabNA~TxlVhiQL6afbwoTyMwDmdkRcOdBQTwK5t4Fi6evF36bTflZA-Xohl28~HZKclXTtiM66GUYJYwtiCvppR0CqEIEyDml8xmmozeaE1PsBQCGaUuzuRwTOKyznKXHRdjzxtQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
                      alt="thumbnil"
                    />
                    <div className="learning_overlay">
                      <div className="play_container">
                        <RiPlayFill />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p className="title">
                        Object Oriented Programming in Javascript - Complete
                        Course
                      </p>
                      <h3 className="headline">
                        How to create objects & their properties in Javascript
                      </h3>
                    </div>
                    <div className="lecture">
                      <p>Lecture</p>
                      <p> • </p>
                      <p>9m</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="learning_single_item">
                  <div className="left">
                    <img
                      src="https://mp4-c.udemycdn.com/2020-10-22_22-03-44-fa922371ecfbb4c690188869e79752d0/1/thumb-1.jpg?Expires=1688671247&Signature=gmUlirRGYQyzIA74C~0mbSaIeYUyoRZakbFBdIz~phBjMpw7NX7EeqeJpAQCNweZGbbw6V9Qqw4JhfM9pzBBWf8b~h9vEjktmowTIccOCMSEOUcN1HOLVFIMHmHcFP6x3RJ8Bf9OazRG8vlLEhiuHavenI-jKp4HGW1GB~lj8nuf8GefPRqFshsW5RBeCRwjk8Wn-pCa1EDVPFfabNA~TxlVhiQL6afbwoTyMwDmdkRcOdBQTwK5t4Fi6evF36bTflZA-Xohl28~HZKclXTtiM66GUYJYwtiCvppR0CqEIEyDml8xmmozeaE1PsBQCGaUuzuRwTOKyznKXHRdjzxtQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
                      alt="thumbnil"
                    />
                    <div className="learning_overlay">
                      <div className="play_container">
                        <RiPlayFill />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p className="title">
                        Object Oriented Programming in Javascript - Complete
                        Course
                      </p>
                      <h3 className="headline">
                        How to create objects & their properties in Javascript
                      </h3>
                    </div>
                    <div className="lecture">
                      <p>Lecture</p>
                      <p> • </p>
                      <p>9m</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SliderButton>
        </div>
      </section>
    </Layout>
  );
};

export default MyLearning;
