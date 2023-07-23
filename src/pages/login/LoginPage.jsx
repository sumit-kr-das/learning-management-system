import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContent'
// Stylesheet
import '../signup/signUpPage.scss'
// Constants data
import { userData } from '../../constants/userData';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const setData = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === credentials.email && userData[i].password === credentials.password) {
        dispatch({ type: "LOGIN_SUCCESS", payload: credentials });
        toast.success('User login successfully')
        return navigate("/");
      } else {
        return toast.error("Please check your email & password")
      }
    }
  }

  return (
    <div className='sign_up_page'>
      <div className='sign_up_container'>
        <p className='sign_up_heading'>Log in and start learning</p>
        <form>
          <div>
            <input
              type="email"
              placeholder='Email'
              name="email"
              value={credentials.email}
              onChange={setData}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={credentials.password}
              onChange={setData}
            />
          </div>
          <button onClick={handleSubmit} type='submit' className='submit_btn'>Log in</button>
          <p className='account_is'>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
