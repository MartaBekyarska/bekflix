import React from 'react';
import { Link } from 'react-router-dom';

const CoverComponent = (props) => {
  return (
    <div className="wrap">
       <Link to={props.id}> 
        <img src={props.image} className="image" alt={props.title} />
        <h2>{props.title}</h2>
      </Link> 
    </div>
  );
};
export default CoverComponent;