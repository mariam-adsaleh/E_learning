import React from 'react';
import './index.css'; 

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};


export default Card;
