import React, { Component } from 'react';
import img from './img/Man-On-Fire.jpg';
import BlackMirror from './img/BlackMirror.jpg';
import BreakingBad from './img/BreakingBad.jpg';
import DeathNote from './img/DeathNote.jpg';
import GameOfThrones from './img/GameOfThrones.jpg';
import TheWalkingDead from './img/TheWalkingDead.jpg';
import TheWire from './img/TheWire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header>
        <div className="table">
          <div className="wrap">
            <img src={BlackMirror} className="image" alt="Black Mirror" />
            <h2>Black Mirror</h2>
          </div>
          <div className="wrap">
            <img src={BreakingBad} className="image" alt="BreakingBad" />
            <h2>Breaking Bad</h2>
          </div>
          <div className="wrap">
            <img src={DeathNote} className="image" alt="Death Note" />
            <h2>Death Note</h2>
          </div>
        </div>
        

          <div className="table">
            <div className="wrap">
              <img src={GameOfThrones} className="image" alt="GameOfThrones" />
              <h2>Game of Thrones</h2>
            </div>
            <div className="wrap">
              <img src={TheWalkingDead} className="image" alt="The Walking Dead" />
              <h2>The Walking Death</h2>
            </div>
            <div className="wrap">
              <img src={TheWire} className="image" alt="The Wire" />
              <h2>The Wire</h2>
            </div>  
          </div>
          
        
         {/* <img src={img} className="App-logo" alt="cover" />  */}
        </header>
      </div>
    );
  }
}


export default App;
