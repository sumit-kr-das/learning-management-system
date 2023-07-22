import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { webCourses } from '../../constants/courses/webCourses'
import CategoryItem from '../../components/common/singleCategory/categoryItem/CategoryItem';
import { useParams } from 'react-router-dom';
import { categories } from '../../constants/categories'
import { courseData } from '../../constants/courseData'



const SignleCategoryPage = () => {
  const [courses, setCourses] = useState([])
  const params = useParams();
  const courseType = params.type;

  useEffect(() => {
    searchCourses();
  }, [params])


  const searchCourses = () => {
    const filterCourses = courseData.filter((item) => item.context_info.category.title === courseType)
    setCourses(filterCourses);
  }

  return (
    <Layout>
      <h1>Courses to get you started</h1>
      <CategoryItem data={courses} />
    </Layout>
  )
}

export default SignleCategoryPage
