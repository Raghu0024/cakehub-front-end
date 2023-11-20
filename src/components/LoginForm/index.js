import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'http://127.0.0.1:8000/api/login/'  //login Api URL
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        {/* <img
          src=""
          className="login-website-logo-mobile-image"
          alt="Cake Hub Logo"
        /> */}
        
        <img
          src="https://www.wallpaperflare.com/baked-cake-and-balloons-birthday-colorful-happy-birthday-celebration-wallpaper-sewxe"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          {/* <img
            src=""
            className="login-website-logo-desktop-image"
            alt="Cake Hub Logo"
          /> */}
          <svg viewBox="0 0 220 220" fill="none" width="50" height="50">
                    <mask id="path-1-inside-1_2_1407" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M150 190C155.523 190 160 185.523 160 180V60C160 54.4772 155.508 49.9629 149.999 50.3517C80.65 55.2467 25.2467 110.65 20.3517 179.999C19.9629 185.508 24.4772 190 30 190H150Z">
                        </path>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M150 190C155.523 190 160 185.523 160 180V60C160 54.4772 155.508 49.9629 149.999 50.3517C80.65 55.2467 25.2467 110.65 20.3517 179.999C19.9629 185.508 24.4772 190 30 190H150Z"
                        fill="rgb(255, 163, 165)"></path>
                    <path
                        d="M152 60V180H168V60H152ZM28.3319 180.562C32.9463 115.188 85.1875 62.9463 150.562 58.3319L149.435 42.3716C76.1125 47.5471 17.5471 106.112 12.3716 179.435L28.3319 180.562ZM150 182H30V198H150V182ZM12.3716 179.435C11.6302 189.938 20.2116 198 30 198V182C29.4304 182 28.9727 181.773 28.6808 181.474C28.4106 181.198 28.3079 180.901 28.3319 180.562L12.3716 179.435ZM152 180C152 181.105 151.105 182 150 182V198C159.941 198 168 189.941 168 180H152ZM168 60C168 50.2116 159.938 41.6302 149.435 42.3716L150.562 58.3319C150.901 58.3079 151.198 58.4106 151.474 58.6808C151.773 58.9727 152 59.4304 152 60H168Z"
                        fill="rgb(255, 163, 165)" mask="url(#path-1-inside-1_2_1407)"></path>
                    <mask id="path-3-inside-2_2_1407" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z">
                        </path>
                    </mask>
                    <path
                        d="M172 50V170H188V50H172ZM48.3319 170.562C52.9463 105.188 105.187 52.9463 170.562 48.3319L169.435 32.3716C96.1125 37.5471 37.5471 96.1125 32.3716 169.435L48.3319 170.562ZM170 172H50V188H170V172ZM32.3716 169.435C31.6302 179.938 40.2116 188 50 188V172C49.4304 172 48.9727 171.773 48.6808 171.474C48.4106 171.198 48.3079 170.901 48.3319 170.562L32.3716 169.435ZM172 170C172 171.105 171.105 172 170 172V188C179.941 188 188 179.941 188 170H172ZM188 50C188 40.2116 179.938 31.6302 169.435 32.3716L170.562 48.3319C170.901 48.3079 171.198 48.4106 171.474 48.6808C171.773 48.9727 172 49.4304 172 50H188Z"
                        fill="rgb(0, 0, 0)" mask="url(#path-3-inside-2_2_1407)"></path>
                </svg>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
