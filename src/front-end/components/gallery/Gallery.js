import React from 'react';
import '../app/App.css';
import CoverComponent from '../cover/Cover';
import covers from '../covers/Covers';

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