import React, { useEffect, useState } from 'react'
import CourseDetails from '../../components/common/course/CourseDetails'
import Layout from '../../components/layout/Layout'
import { courseData } from '../../constants/courseData'
import { useParams } from 'react-router-dom'

const CoursePage = () => {
  const [courses, setCourses] = useState([])
  const params = useParams();
  const courseType = Number(params.id);
  // console.log(courseType);

  useEffect(() => {
    searchCourses();
  }, [params])


  const searchCourses = () => {
    const filterCourses = courseData.filter((item) => item.id === courseType)
    setCourses(filterCourses[0]);
  }

  console.log(courses);
  return (
    <>
      <CourseDetails courses={courses} />
    </>
  )
}

export default CoursePage
