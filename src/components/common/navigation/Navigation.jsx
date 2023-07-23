import React, { useContext, useState } from 'react';
// React avatar
import Avatar from 'react-avatar';
// Icons
import { RiSearchLine, RiHeart3Line, RiShoppingCartLine, RiNotification2Line } from "react-icons/ri";
// Images
import logo from '../../../assets/logo-udemy.svg'
// Stylesheet
import './navigation.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContent';

const Navigation = () => {
    const {user} = useContext(AuthContext);
    return (
        <nav>
            <div className='left_child'>
                <div className='nav_links'>
                    <Link to="/">
                        <img src={logo} alt="nav logo" />
                    </Link>
                </div>
                <div className='nav_links'>
                    <Link to="/">Categories</Link>
                </div>
            </div>
            <div className='center_child'>
                <div className='input_container'>
                    <RiSearchLine className='search_icon' />
                    <input type="text" placeholder='Search for anything' />
                </div>
            </div>
            <div className='right_child'>
                <div className='nav_links'>
                    <Link to="/">My Learning</Link>
                </div>
                <div className='nav_links'>
                    <Link to="/">Instructor</Link>
                </div>
                <div className='nav_links'>
                    <Link to="/">
                        <RiHeart3Line className='nav_icons' />
                    </Link>
                </div>
                <div className='nav_links'>
                    <Link to="/">
                        <RiShoppingCartLine className='nav_icons' />
                    </Link>
                </div>
                <div className='nav_links'>
                    <Link to="/">
                        <RiNotification2Line className='nav_icons' />
                    </Link>
                </div>
                {
                    user ?
                        <div className='nav_links'>
                            <Link to="/">
                                <Avatar name="Wim Mostmans" size="30" round={true} />
                            </Link>
                        </div>
                        :
                        <Link to={"/login"}>
                            <button>Login</button>
                        </Link>
                }

            </div>
        </nav>
    )
}

export default Navigation
