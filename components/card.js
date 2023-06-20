import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className='card'>
        <div>
            <Image className='cardImage' width={300} height={200} src={imageUrl} alt={title} />
        </div>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
    </div>
  );
};

export default Card;