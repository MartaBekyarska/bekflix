import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details';
import Gallery from './Gallery';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/:details" exact component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }

}




export default App;
