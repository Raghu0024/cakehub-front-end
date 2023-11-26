import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
import RegisterForm from '../RegisterForm'

<BrowserRouter>
<Switch>
  <Route path="/register" component={RegisterForm} />
</Switch>
</BrowserRouter>
const LoginForm = () =>(
  <><div className='wrapper'>
  <div className='form-container sign-in'>
    <form action='#'>

        <div className='form-group'>
          <input type='text' required></input>
          <i className='fas fa-user'></i>
          <label for="">username</label>
        </div>
        <div className='form-group'>
          <input type='password' required></input>
          <i className='fas fa-lock'></i>
          <label for="">password</label>
        </div>
        <div className='forget-pass'>
          <a href='#'>forgot password?</a>
        </div>
        <button type='submit' className='btnsu'>login</button>
        <div className='link'>
          <p>Don't have an account?<a href='/register' className='signup-link'>Register</a></p>
        </div>
    </form>
  </div>
  </div>
  </>
)
export default LoginForm