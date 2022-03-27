import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);
    }

 
    return (
        <div className='shop-container'>
           <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product = {product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)    
                }
           </div>
           <div className="cart-container">
                <Cart
                 key={cart.id}
                 handleAddToCart={handleAddToCart}
                 cart={cart}></Cart>
           </div>
           <div className="qa-container">
                <h2>Question - Answers</h2>
                <h3> 1. What are the differences between props and state? </h3>
                <p>In case of props, the date is passed from one component to another component, whereas in state, the data is moved within components. 
props can not be modified but the state can be modified. 
props are read-only, but the state can be both read and written. 
props can be used both with the state and functional components. But the state can only be used with the state component. </p>

                <h3> 2. How does React work? </h3>
                <p>React is a javascript library which is used to create user interface. Initially, react creates a virtual dom. Then, it compares the virtual dom with real dom to identifu any changes made in any component in virtual dom. This change is observed by a tool called useState. React then efficiently update and render the component.</p>

           </div>
        </div>
    );
};

export default Shop;