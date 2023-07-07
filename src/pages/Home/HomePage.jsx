import React from "react";
// Components
import Categories from "../../components/common/home/categories/Categories";
import HeroSlider from "../../components/common/home/heroSlider/HeroSlider";
import MyLearning from "../../components/common/home/myLearning/MyLearning";
import Features from "../../components/common/home/features/Features";
import CourseCardSlider from "../../components/common/courseCardSlider/CourseCardSlider";
// Constant Data
import {courseData} from '../../constants/courseData'

const HomePage = () => {
  return (
    <>
      <Categories />
      <HeroSlider />
      <MyLearning />
      {/*<Features />*/}
      <CourseCardSlider data={courseData} />
      <CourseCardSlider data={courseData} />
      <CourseCardSlider data={courseData} />
    </>
  );
};

export default HomePage;
