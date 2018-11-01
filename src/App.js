import React, { Component } from 'react';
import img from './img/Man-On-Fire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
           <h2>
             <ul>
               <li>Black Mirror</li>
               <li>Breaking Bad</li>
               <li>Death Note</li>
               <li>Game of Thrones</li>
               <li>The Walking Death</li>
               <li>The Wire</li>
               </ul>
               </h2>
        <img src={img} className="App-logo" alt="cover" />
          </header>
        
      </div>
    );
  }
}


export default App;
