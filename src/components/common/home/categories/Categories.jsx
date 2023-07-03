import React from 'react';
// Stylesheet
import './categories.scss';

// Constants
import { categories } from '../../../../constants/data';

const Categories = () => {
    return (
        <section className='categories'>
            <div className='categories_container'>
                {
                    categories.map((item, index) => (
                        <p key={index}>{item.tag}</p>
                    ))
                }
            </div>
        </section>
    )
}

export default Categories
