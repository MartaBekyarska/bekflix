import React from 'react';
import '../css/App.css';
import CoverComponent from './Cover';
import covers from './Covers';

const Gallery = () => {
  return (
    <div className='container'> 
    {   
      covers.map(function(cover) {
        return <CoverComponent id= {cover.id} title={cover.title} image={cover.image} message={cover.message} />;
      })
    }
    </div>

  );
}
export default Gallery;