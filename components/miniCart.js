import React, { useState, useEffect } from 'react';
// import CartPopup from './cartPopup';
// import cartItems from '../data/data-card.json';
import product from '../data/data-cart.json';


const MiniCart = () => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0); // Assuming initial price is $10
    const [cartItems, setCartItems] = useState([]);
    const [isCartPopupOpen, setCartPopupOpen] = useState(false);

    // Function to handle quantity increment
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + 10); // Assuming each item costs $10
    };

    // Function to handle quantity decrement
    const decrementQuantity = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        setTotalPrice(totalPrice - 10); // Assuming each item costs $10
        }
    };

  useEffect(() => {
    // Fetch data from data.json or an API endpoint here
    // For example, you can fetch the data using Fetch API or Axios
    // Update the cart items state with the fetched data
    setCartItems(product);
  }, []);

  const openCartPopup = () => {
    setCartPopupOpen(true);
  };

  const closeCartPopup = () => {
    setCartPopupOpen(false);
  };

    return (
        <div className='buttonHeaderContainer'>
          <button className='button-no-border' onClick={openCartPopup}><img width={30} height={30} src='https://res.cloudinary.com/dnfvpjm1r/image/upload/v1687249773/bag_wm7x7s.png' alt='button cart' /></button>
          {isCartPopupOpen && (
            <div className="cart-popup">
              <div className="cart-popup-content">
                <h2>Cart</h2>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul>
                    {cartItems.map((product) => (
                    <>
                        <li>{product.id}</li>
                        <li>{product.title}</li>
                        <li>{product.description}</li>
                        <li>{product.price}</li>
                        <p>Quantity: {quantity}</p>
                        <button onClick={incrementQuantity}>+</button>
                        <button onClick={decrementQuantity}>-</button>
                        <p>Total Price: ${totalPrice}</p>
                    </>
                    ))}
                  </ul>
                )}
                <button onClick={closeCartPopup}>Close</button>
              </div>
            </div>
          )}
          <button className='button-no-border'>Login</button>
          <button className='button-primary'>Sign Up</button>
        </div>
        // <div>
        // <h2>Mini Cart</h2>
        // <p>Quantity: {quantity}</p>
        // <button onClick={incrementQuantity}>+</button>
        // <button onClick={decrementQuantity}>-</button>
        // <p>Total Price: ${totalPrice}</p>
        // </div>
    );
};

  export default MiniCart;
