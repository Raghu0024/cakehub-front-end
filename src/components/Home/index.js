import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Cake Therapy: Because Life Is Better with Dessert</h1>
          <img
            src="https://www.wallpaperflare.com/baked-cake-and-balloons-birthday-colorful-happy-birthday-celebration-wallpaper-sewxe"
            alt="dresses to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
          Welcome to CakeHub, your one-stop destination for all things sweet and delightful. At CakeHub, we believe in the power of cake to bring joy, create memories, and make every occasion a little sweeter.
          Order online and experience the magic of CakeHub. We're here to serve up smiles, one slice at a time."
          </p>
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/raghu11221/image/upload/v1698431145/celebration-party-concept-hopeful-dreamy-woman-making-wish-birthday-cake-cross-fingers-smiling-happy-standing-white-background_izdeav.jpg"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
