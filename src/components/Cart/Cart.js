import React, { useState } from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   let items = [];

    for (const prod of cart)
    {
        items.push(prod);
    }
   
    let selectedItems = [];

    const handleDelete = (items) => {
        for (const item of items)
        {
            items.pop();
        }
        console.log(items);
    }

    const handleChooseOne = (items) => {
        console.log('clicked');
        selectedItems = items[Math.floor(Math.random() * items.length)];
        console.log(selectedItems);
    }

    return (
        <div className='cart'>
            <p className='selected-items'>SELECTED ITEMS:  </p>
            <p>{items.map((item)=> <li key={item.id}>{item.name}</li>)}</p>
            <div className='cart-btn'>
                <button onClick={() => handleChooseOne(items)}>CHOOSE ONE FOR ME</button>
                <button onClick={() => handleDelete(items)}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;
