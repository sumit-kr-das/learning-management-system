import React from 'react'
import { Link } from 'react-router-dom';
// Images
import logo from '../../../assets/logo-udemy-dark.svg'
import appStore from '../../../assets/app-store.png'
// Stylesheet
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer_container'>
                <div className='left_container'>
                    <img className='nav_logo' src={logo} alt="footer logo" />
                    <p>Myacademy is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.</p>
                    <img className='app_store' src={appStore} alt="app store" />
                </div>
                <div className='right_container'>
                    <ul>
                        <li><Link to="/">Company</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Blogs</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Terms and conditions</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Help & support</Link></li>
                        <li><Link to="/">User Guidelines</Link></li>
                        <li><Link to="/">Site Map</Link></li>
                        <li><Link to="/">Refund Policy</Link></li>
                        <li><Link to="/">Takedown Policy</Link></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>© 2023 Sorting Hat Technologies Pvt Ltd</p>
        </footer>
    )
}

export default Footer
