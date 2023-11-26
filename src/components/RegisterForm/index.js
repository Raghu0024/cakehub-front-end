import Header from '../Header'
import './index.css'
import React from 'react';


const RegisterForm = () => (
  <>
  
      <div className='wrapper'>
<div className='form-containers sign-in'>
  <form action='#'>
      <div className='form-group'>
        <input type='text' required></input>
        <i className='fas fa-user'></i>
        <label for="">Email</label>
      </div>
      <div className='form-group'>
        <input type='text' required></input>
        <i className='fas fa-user'></i>
        <label for="">Phone Number</label>
      </div>
      <div className='form-group'>
        <input type='text' required></input>
        <i className='fas fa-user'></i>
        <label for="">Address</label>
      </div>
      <div className='form-group'>
        <input type='password' required></input>
        <i className='fas fa-lock'></i>
        <label for="">password</label>
      </div>
      <div className='form-group'>
        <input type='password' required></input>
        <i className='fas fa-lock'></i>
        <label for="">confirm password</label>
      </div>
      <div className='forget-pass'>
        <a href='#'>forgot password?</a>
      </div>
      <button type='submit' className='btnsu'>Register</button>
      <div className='link'>
      <p>have an account?<a href='/login' className='signup-link'>Log in</a></p>
          </div>
  </form>
</div>
      </div>
     
   
  </>
)

export default RegisterForm