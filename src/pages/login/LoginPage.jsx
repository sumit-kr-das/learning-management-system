import React from 'react';
import { Link } from 'react-router-dom';
// Stylesheet
import '../signup/signUpPage.scss'

const LoginPage = () => {
  return (
    <div className='sign_up_page'>
      <div className='sign_up_container'>
        <p className='sign_up_heading'>Log in and start learning</p>
        <form>
          <div>
            <input type="email" placeholder='Email' />
          </div>
          <div>
            <input type="password" placeholder='Password' />
          </div>
          <button type='submit' className='submit_btn'>Log in</button>
          <p className='account_is'>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
