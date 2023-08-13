import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className='card-container card'>
       <img src={image} alt={title} className='image' />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read More ... </a>
    </div>
  );
};

export default Card;