import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   let total = 0 ;
   for(const product of cart){
    total =total + product.price;
   }
    return (
        <div className='cart'>
              <h2>Order Summary</h2>
                <p>Selected Items : {cart.length}</p>
                <p>Total Price : {total} </p>
                <p>Total Shiping  : </p>
                <p>Tax</p>
                <h6>Grand Total : </h6>
        </div>
    );
};

export default Cart;