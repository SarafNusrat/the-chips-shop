import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    
    let items = [];
    for (const product of cart)
    {
        items.push(product.name);
        // items.split(',').join("<br />");
    }

    return (
        <div className='cart'>
            <p className='selected-items'>SELECTED ITEMS: </p>
            <p>{items.map((items)=> <li>{items}</li>)}</p>
            <div className='cart-btn'>
                <button>CHOOSE ONE FOR ME</button>
                <p></p>
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;
