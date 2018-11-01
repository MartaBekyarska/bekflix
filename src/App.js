import React, { Component } from 'react';
import img from './img/Man-On-Fire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { <header>
          <img src={img} className="App-logo" alt="cover" />
          </header>
        }
      </div>
    );
  }
}

export default App;
