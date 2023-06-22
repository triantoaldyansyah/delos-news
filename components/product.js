import React from 'react';
import data from '../data/data-card.json';
import Card from './card';

const Product = () => {
  return (
    <div className='cardContainer'>
      {data.map((product) => (
        <Card 
        key={product.id} 
        imageUrl={product.imageUrl} 
        title={product.title} 
        price={product.price} 
        description={product.description}
        />
      ))}
    </div>
  );
};

export default Product;
