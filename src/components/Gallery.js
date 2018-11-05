import React from 'react';
import BlackMirror from './img/BlackMirror.jpg';
import BreakingBad from './img/BreakingBad.jpg';
import DeathNote from './img/DeathNote.jpg';
import GameOfThrones from './img/GameOfThrones.jpg';
import TheWalkingDead from './img/TheWalkingDead.jpg';
import TheWire from './img/TheWire.jpg';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div>
      <div className="table">
        <CoversComponent title='BlackMirror' image={BlackMirror} />
        <CoversComponent title='BreakingBad' image={BreakingBad} />
        <CoversComponent title='DeathNote' image={DeathNote} />
      </div>

      <div className="table">
        <CoversComponent title='GameOfThrones' image={GameOfThrones} />
        <CoversComponent title='TheWalkingDead' image={TheWalkingDead} />
        <CoversComponent title='TheWire' image={TheWire} />
      </div>
    </div>

  );
}
const CoversComponent = (props) => {
  return (
    <div className="wrap">
       <Link to="/details"> 
        <img src={props.image} className="image" alt={props.title} />
        <h2>{props.title}</h2>
      </Link> 
    </div>
  );
};
export default Gallery;