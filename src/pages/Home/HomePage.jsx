import React from "react";
// Components
import Categories from "../../components/common/home/categories/Categories";
import HeroSlider from "../../components/common/home/heroSlider/HeroSlider";
import MyLearning from "../../components/common/home/myLearning/MyLearning";
import Features from "../../components/common/home/features/Features";
import CourseCardSlider from "../../components/common/courseCardSlider/CourseCardSlider";
// Constant Data
import { courseData } from '../../constants/courseData'
import { webCourses } from "../../constants/courses/webCourses";
import { marketingCourses } from "../../constants/courses/marketingCourses";
import { itCourses } from "../../constants/courses/itCourses";
import { musicCourses } from "../../constants/courses/musicCourses";
import { personalCourses } from "../../constants/courses/personalCourses";

const HomePage = () => {
  return (
    <>
      <Categories />
      <HeroSlider />
      <MyLearning />
      {/*<Features />*/}
      <CourseCardSlider data={webCourses} title="Development Courses" />
      <CourseCardSlider data={marketingCourses} title="Marketing Courses" />
      <CourseCardSlider data={itCourses} title="Software & IT Courses" />
      <CourseCardSlider data={musicCourses} title="Music Courses" />
      <CourseCardSlider data={personalCourses} title="Personal Development Courses" />
    </>
  );
};

export default HomePage;
