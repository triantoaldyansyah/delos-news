import React from 'react';
import Image from 'next/image';

const Card = ({ title, price, description, imageUrl }) => {
  return (
    <div className='card'>
        <div>
            <Image className='cardImage' width={300} height={200} src={imageUrl} alt={title} />
        </div>
        <h3 className='title'>{title}</h3>
        <h3 className='price'>IDR {price},00</h3>
        <p className='description'>{description}</p>
        <div className='buttonContainer'>
            <button className='button-primary'>Add to Cart</button>
            <button className='button-primary'>Details</button>
        </div>
    </div>
  );
};

export default Card;