import React from 'react';
import Header from '../Header';
import StarRatings from 'react-star-ratings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Products = () => {
  const [ratingValue, setRatingValue] = React.useState(0);
 
  
  return (
    <>
      <Header />
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{ width: '18rem' }}>
              <a href="#">
                <img
                  src="https://img.freepik.com/free-photo/high-angle-cake-with-flowers-plate_23-2149455735.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais"
                  className="card-img-top position-relative"
                  alt="blackcurrent"
                  height="200px"
                />
                    {/* Add heart or favorite icon as an SVG */}
                    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      width="32"
      height="32"
      className="bi bi-heart-fill text-light"
      id='heart-icon'
      style={{ position: 'absolute', top: 0, right: 0, margin: '8px' }}
     
    >
      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132z" />
     </svg>

              </a>
            
              <div className="card-body d-flex flex-column">
                <p>
                  <StarRatings
                    rating={ratingValue}
                    starRatedColor="orange"
                    changeRating={(newRating) => setRatingValue(newRating)}
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </p>
                <h5 className="card-title">Blackcurrent <span>|</span>&nbsp;<span>cost:$12</span></h5>
                <p className="card-text">
                  This is the favorite cake of many people
                </p>

                <div className="row">
                  <div className='col'>
                  <button className="btn btn-primary rounded-pill w-30 text-white">Add to cart </button>
                  </div>
                  <div className='col'>
                  <button className="btn btn-info rounded-pill w-30 text-white">Buy Now</button>
                 </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
 };

export default Products;
