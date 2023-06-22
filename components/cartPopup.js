import React from 'react';

const CartPopup = ({ cartItems, closePopup }) => {
  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((cardData) => (
              <li key={cardData.id} className="cart-item">
                <span className="item-name">{cardData.name}</span>
                <span className="item-price">${cardData.price}</span>
              </li>
            ))}
          </ul>
        )}
        <button className="close-button" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;

