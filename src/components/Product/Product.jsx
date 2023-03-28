import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,seller,qantity} = props.product;
    return (
        <div className='product'>
        <img src={img} alt="" />
        </div>
    );
};

export default Product;