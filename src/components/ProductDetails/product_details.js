import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import './product_details.css'
import StarRatings from 'react-star-ratings';

  
const ProductDetails = () => {
  const [ratingValue, setRatingValue] = React.useState(0);

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-photo/high-angle-cake-with-flowers-plate_23-2149455735.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais"
              className="card-img-top position-relative hover-zoom image"
              alt="blackcurrent"
              width="100%"
             
            />
             <div className="button">
                    <a className="cart-btn btn btn-primary" href="#">
                      <i className="cart-icon ion-bag"></i>ADD TO CART
                    </a>&nbsp;
                    <a className="cart-btn btn btn-primary" href="#">
                      <i className="cart-icon ion-bag"></i>BUY NOW
                    </a>
                  </div>
                 
          </div>
          <div className="col-md-3">
            <h5 className="card-title">Blackcurrent </h5>
            <p className="card-text">
              This is the favorite cake of many people
            </p>
            <p>
                    <StarRatings
                      rating={ratingValue}
                      starRatedColor="orange"
                      changeRating={(newRating) => setRatingValue(newRating)}
                      numberOfStars={5}
                      name="rating"
                      starDimension="25px"
                      starSpacing="1px"
                    />
                  </p>
                  <p className="text-lead">$150 for one</p>
              <h6>Coupons for you</h6>
                  <p>Partner OfferBuy this product and get upto ₹250 Off 
                    <a href=''>know more</a>
                  </p>
                  <h6>Available offers</h6>
<ul >
  <li>Bank Offer10% off on Axis Bank Credit Card EMI Transactions</li>
  <li>Eligible for  Pay Later?
  </li>
  <li><a href="">view more offers</a></li>
</ul>
              
          </div>
          <div className="col col-md-3">
            <h1>Ingredients</h1>
            <br />
            <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
    
      flour, sugar,
    </div>
    <span className="badge bg-primary rounded-pill">1kg</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
   
      eggs, fat (usually butter),
    </div>
    <span className="badge bg-primary rounded-pill">6</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
     
      a form of liquid (usually milk),
    </div>
    <span className="badge bg-primary rounded-pill">1l</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      
      and leavening agents (such as baking soda).
    </div>
    <span className="badge bg-primary rounded-pill">9</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      
    salt
    </div>
    <span className="badge bg-primary rounded-pill">required</span>
  </li>
</ol>

          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <h1>Order Online</h1>
  <div className="row">
    <div className="col-md-4">
    <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src="https://img.freepik.com/free-photo/front-view-female-courier-yellow-uniform-cap-holding-brown-coffee-cups-using-her-phone-pink-wall_140725-38084.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais" alt="Paris" style={{width:'300px',height:'200px'}} /> 
    </div>
    <div class="flip-box-back p-5">
      <h2>order online</h2>
      <p>Cakehub the great way to delicious cakes</p>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-8" style={{ overflow: 'auto', maxHeight: '300px' }}>
  
<div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-photo/beautifully-decorted-bakery-sweets_23-2149367807.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais" class="card-img" alt="..." w-100 />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">fruit cake</h5>
        <p className="card-text">cake with delicious fruits </p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-photo/beautifully-decorted-bakery-sweets_23-2149367807.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais" class="card-img" alt="..." w-100 />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">fruit cake</h5>
        <p className="card-text">cake with delicious fruits </p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-photo/beautifully-decorted-bakery-sweets_23-2149367807.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais" class="card-img" alt="..." w-100 />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">fruit cake</h5>
        <p className="card-text">cake with delicious fruits </p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-photo/beautifully-decorted-bakery-sweets_23-2149367807.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais" class="card-img" alt="..." w-100 />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">fruit cake</h5>
        <p className="card-text">cake with delicious fruits </p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
       </div>
  </div>
</div>
<br />
<div className='container'>
<h4>

Send Birthday Cake Online with Cakehub</h4>
<p style={{fontSize:'15px' , fontFamily:'sans-serif'}}>
Birthdays are incomplete without Cakes! The practice of cutting a cake on Birthday, blowing the candles and making a wish is age old. Birthdays are special as they make you a year older, wiser and mature. They definitely call for a big celebration and no celebration is complete without a cake. An ideal birthday party scene is friends and family gathered around singing happy birthday and there is a delicious and tempting birthday cake made for the party. With the kind of busy lives that people have, there is almost no time for baking a birthday cake. Well, fret not! FNP comes to your rescue! We have the best and the yummiest cakes for making your celebrations super special! Cakes are associated with celebrations, cherished childhood memories, cake fights, surprise parties etc. Understanding the importance of cakes and getting the taste and flavour right, is what we specialize in. Our skilled cake artists ensure that every order is crafted to perfection so that you can have a memorable cake for your special occasions. So, whether you buy fondant cakes or photo ones, they will make the birthday boy/girl ecstatic, for a cake is the soul of the party. Don’t keep waiting now and check out the incredible collection of birthday cakes on our site.
</p>
</div>
<div className="container-fluid bg-secondary p-5 text-white text-center">
  <div className='row'>
    <div className='col-sm-3'>
    Worldwide Delivery
We deliver gifts to over 70 countries
</div>
<div className='col-sm-3'>
100% Safe & Secure Payments
Pay using secure payment methods
</div>
<div className='col-sm-3'>
Dedicated Help Center
Call us +91 9988766600 | 8:00AM-10:30PM
</div>
<div className='col-sm-3'>
Shop on the Cakehub

</div>
  </div>

</div>
    </>
  );
};

export default ProductDetails;