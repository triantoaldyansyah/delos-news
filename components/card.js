import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Product from './product';
import data from '../data/data-cart.json';

const Card = ({ id, title, price, description, imageUrl }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = () => {
        const selectedProduct = data.find((product) => product.id === id);
        handleToCart(selectedProduct);
    };
    const handleToCart = (product) => {
        setCartItems([cartItems.length, product]);
    };
    useEffect(() => {
        // Fetch data from data.json or an API endpoint here
        // For example, you can fetch the data using Fetch API or Axios
        // Update the cart items state with the fetched data
        setCartItems(Product);
      }, []);
  return (
    <div className='card'>
        <div>
            <Image className='cardImage' width={300} height={200} src={imageUrl} alt={title} />
        </div>
        <h3 className='title'>{title}</h3>
        <h3 className='price'>IDR {price},00</h3>
        <p className='description'>{description}</p>
        <div className='buttonContainer'>
            <button className='button-primary' onClick={addToCart}>Add to Cart</button>
            <button className='button-primary'>Details</button>
        </div>
    </div>
  );
};

export default Card;