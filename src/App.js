import React, { Component } from 'react';
import BlackMirror from './img/BlackMirror.jpg';
import BreakingBad from './img/BreakingBad.jpg';
import DeathNote from './img/DeathNote.jpg';
import GameOfThrones from './img/GameOfThrones.jpg';
import TheWalkingDead from './img/TheWalkingDead.jpg';
import TheWire from './img/TheWire.jpg';
import './App.css';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="table">
          <CoversComponent title='BlackMirror' image={BlackMirror} />
          <CoversComponent title='BreakingBad' image={BreakingBad} />
          <CoversComponent title='DeathNote' image={DeathNote} />
          </div>

          <div className="table">
            <CoversComponent title='Game of Thrones' image={GameOfThrones} />
            <CoversComponent title='TheWalkingDead' image={TheWalkingDead} />
            <CoversComponent title='TheWire' image={TheWire} />
          </div>

        </header>
      </div>
    );
  }
 
}
const CoversComponent = (props) => {
  return (
    <div className="wrap">
      <img src={props.image} className="image" alt={props.title} />
      <h2>{props.title}</h2>
    </div>
  );
};


export default App;
