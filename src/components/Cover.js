import React from 'react';
import { Link } from 'react-router-dom';

const CoverComponent = ({ id, image, title }) => {
  return (
    <div className="wrap">
       <Link to={id}> 
        <img src={image} className="image" alt={title} />
        <div className="overlay">
        <h2>{title}</h2>
        </div>
      </Link> 
    </div>
  );
};
export default CoverComponent;