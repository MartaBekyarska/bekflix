import React from 'react';
import BlackMirror from './img/BlackMirror.jpg';
import BreakingBad from './img/BreakingBad.jpg';
import DeathNote from './img/DeathNote.jpg';
import GameOfThrones from './img/GameOfThrones.jpg';
import TheWalkingDead from './img/TheWalkingDead.jpg';
import TheWire from './img/TheWire.jpg';
import '../css/App.css';
import CoverComponent from './Cover';

const Gallery = () => {
  return (
    <div>
      <div className="table">
        <CoverComponent id='blackmirror' title='BlackMirror' image={BlackMirror} />
        <CoverComponent id='breakingbad' title='BreakingBad' image={BreakingBad} />
        <CoverComponent id='deathnote' title='DeathNote' image={DeathNote} />
      </div>

      <div className="table">
        <CoverComponent id='gameofthrones' title='GameOfThrones' image={GameOfThrones} />
        <CoverComponent id='thewalkingdead' title='TheWalkingDead' image={TheWalkingDead} />
        <CoverComponent id='thewire' title='TheWire' image={TheWire} />
      </div>
    </div>

  );
}
export default Gallery;