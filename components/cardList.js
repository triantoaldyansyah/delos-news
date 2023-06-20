import React from 'react';
import data from '../assets/data-card.json';
import Card from '../components/card';

const CardList = () => {
  return (
    <div className='cardContainer'>
      {data.map((cardData) => (
        <Card key={cardData.id} imageUrl={cardData.imageUrl} title={cardData.title} description={cardData.description} />
      ))}
    </div>
  );
};

export default CardList;
