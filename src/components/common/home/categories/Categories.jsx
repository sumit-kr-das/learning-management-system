import React from 'react';
// Stylesheet
import './categories.scss';

// Constants
import { categories } from '../../../../constants/categories';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <section className='categories'>
            <div className='categories_container'>
                {
                    categories.map((item, index) => (
                        <Link to={`/category/${item.tag}`} key={index}>
                            <p>{item.tag}</p>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Categories
