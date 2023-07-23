import React from 'react'
import { RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";
import './courseDetails.scss'
import Layout from '../../layout/Layout';
const CourseDetails = ({ courses }) => {
    // console.log(courses.visible_instructors[0].display_name  );
    return (
        <div className='course_details_container'>
            <div className='course_details_header'>
                <div>
                    <img src={courses.image_480x270} alt="" />
                </div>
                <div>
                    <p>Development > Programming Languages > Java</p>
                    <h1>{courses.title}</h1>
                    <p>{courses.headline}</p>
                    <p>Cole Merce</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <Layout>
                <div className='course_details_section'>
                    <h1>hi</h1>
                </div>
            </Layout>
        </div>
    )
}

export default CourseDetails
