// src/components/Card.js

import React from "react";

const Card = ({ img, title, description, link }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;