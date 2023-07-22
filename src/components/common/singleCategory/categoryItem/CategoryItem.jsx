import React from 'react';
import { RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";
import './categoryItem.scss'
import { Link } from 'react-router-dom';

const CategoryItem = ({ data }) => {
    return (
        <div className='category_item'>
            {
                data?.map((item, index) => (
                    <Link to={`/course/${item.id}?type=${item.context_info.category.title}`} className='single_item' key={index}>
                        <div>
                            <img src={item.image_480x270} alt="banner" />
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.headline}</p>
                            <p>{item.visible_instructors[0].display_name}</p>
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
                            <p className="course_price">₹{item.discountPrice ? item.discountPrice : 600}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoryItem
