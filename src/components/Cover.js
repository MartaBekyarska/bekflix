import React from 'react';
import { Link } from 'react-router-dom';

const CoverComponent = (props) => {
  return (
    <div className="wrap">
       <Link to={props.id}> 
        <img src={props.image} className="image" alt={props.title} />
        <div className="overlay">
        <h2>{props.title}</h2>
        </div>
      </Link> 
    </div>
  );
};
export default CoverComponent;