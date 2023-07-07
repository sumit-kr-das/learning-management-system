import React from 'react';
import { Link } from 'react-router-dom';
// Stylesheet
import './signUpPage.scss'

const SignUpPage = () => {
  return (
    <div className='sign_up_page'>
      <div className='sign_up_container'>
        <p className='sign_up_heading'>Sign up and start learning</p>
        <form>
          <div>
            <input type="text" placeholder='Full name' />
          </div>
          <div>
            <input type="email" placeholder='Email' />
          </div>
          <div>
            <input type="password" placeholder='Password' />
          </div>
          <div>
            <input type="password" placeholder='Confirm password' />
          </div>
          <button type='submit' className='submit_btn'>Sign up</button>
          <p className='account_is'>Already have an account? <Link to="/login">Log in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
