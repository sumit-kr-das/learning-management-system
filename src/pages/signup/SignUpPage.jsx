import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Stylesheet
import './signUpPage.scss'
import { userData } from '../../constants/userData';
import { toast } from 'react-hot-toast';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const setData = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);

    if (credentials.password !== credentials.confirmPassword) {
      return toast.error('Password is not matched')
    } else {
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === credentials.email) {
          return toast.error('User already registered')
        }
      }
    }

    localStorage.setItem("user", JSON.stringify({
      name: credentials.email,
      email: credentials.email,
      password: credentials.password,
    }));
    toast.success('User register successfully')
    return navigate("/");
  }

  return (
    <div className='sign_up_page'>
      <div className='sign_up_container'>
        <p className='sign_up_heading'>Sign up and start learning</p>
        <form>
          <div>
            <input type="text" placeholder='Full name' name="name"
              value={credentials.name}
              onChange={setData} />
          </div>
          <div>
            <input type="email" placeholder='Email' name="email"
              value={credentials.email}
              onChange={setData} />
          </div>
          <div>
            <input type="password" placeholder='Password' name="password"
              value={credentials.password}
              onChange={setData} />
          </div>
          <div>
            <input type="password" placeholder='Confirm password' name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={setData} />
          </div>
          <button onClick={handleSubmit} type='submit' className='submit_btn'>Sign up</button>
          <p className='account_is'>Already have an account? <Link to="/login">Log in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
