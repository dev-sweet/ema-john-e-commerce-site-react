import React from 'react';
import Rating from 'react-rating';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,stock,star} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-title">{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating initialRating={star} emptySymbol="far fa-star star-color" fullSymbol="fas fa-star star-color"  />
                <br />
                <br />
                <button className="primary-btn" onClick={()=>{props.handleAddToCart(props.product)}}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;