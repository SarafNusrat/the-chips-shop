import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, image, price} = props.product;
    return (
        <div className='product'>
            <img src = {image} alt = ""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='price'>Price: {price} taka</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;