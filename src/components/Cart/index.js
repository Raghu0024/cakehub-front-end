// Cart.js

import Header from '../Header';
import './index.css';

const Cart = () => (
  <>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 fixed-right">
          <img
            src="https://img.freepik.com/free-photo/high-angle-cake-with-flowers-plate_23-2149455735.jpg?size=626&ext=jpg&ga=GA1.1.939676640.1694439069&semt=ais"
            className="card-img-top position-relative hover-zoom"
            alt="blackcurrent"
          />
        </div>
        <div className="col-sm-5">
          <h5 className="card-title f-2">Blackcurrent </h5>
          <p style={{ fontSize: '20px' }}>This is the favorite cake of many people</p>
          <strike>₹125</strike>
          <span> ₹100 10% Off 2 offers applied</span>
          <br />
          <p className="padtop">
            <a href="" className="saveforlater">
              SAVE FOR LATER
            </a> &nbsp; &nbsp;
            <a href="" className="remove">
              REMOVE
            </a>
          </p>
        </div>
        <div className='col-sm-4'>
          <div className='fixedit'>
         <h3> PRICE DETAILS</h3>
Price (4 items)
₹1,36,358
Discount
− ₹36,848
Coupons for you

− ₹200
Delivery Charges
₹120Free
Total Amount
₹99,310
You will save ₹37,048 on this order
          </div>

        </div>
      </div>
    </div>
  </>
);

export default Cart;
