import React from 'react';
// Stylesheet
import './layout.scss';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            {children}
        </div>
    )
}

export default Layout
