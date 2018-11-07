import React from 'react';
import '../css/App.css';
import CoverComponent from './Cover';
import covers from './Gallery-get';

const Gallery = () => {
  return (
    <div className='container'>
    {   
      covers.map(function(cover) {
        return <CoverComponent id= {cover.id} title={cover.title} image={cover.image} />;
      })
    }
    </div>

  );
}
export default Gallery;