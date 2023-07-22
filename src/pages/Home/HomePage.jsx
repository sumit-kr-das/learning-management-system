import React from "react";
// Components
import Categories from "../../components/common/home/categories/Categories";
import HeroSlider from "../../components/common/home/heroSlider/HeroSlider";
import MyLearning from "../../components/common/home/myLearning/MyLearning";
import Features from "../../components/common/home/features/Features";
import CourseCardSlider from "../../components/common/courseCardSlider/CourseCardSlider";
// Constant Data
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
      <CourseCardSlider
        data={webCourses}
        title="Development"
      />
      <CourseCardSlider
        data={marketingCourses}
        title="Marketing" />
      <CourseCardSlider
        data={itCourses}
        title="IT & Software"
      />
      <CourseCardSlider
        data={musicCourses}
        title="Music"
      />
      <CourseCardSlider
        data={personalCourses}
        title="Personal Development"
      />
    </>
  );
};

export default HomePage;
