import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    return (
      <div> 
        <h1>Ooops it looks like this page doesn't exist :(</h1>
        <Link to='/'>Back to the Home page</Link>
      </div>
      );
  }
  export default NotFound;