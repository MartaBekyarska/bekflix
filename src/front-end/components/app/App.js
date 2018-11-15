import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from '../details/Details';
import Gallery from '../gallery/Gallery';
import NotFound from '../not-found/NotFound';
import './App.css';

class App extends Component {

  render() {

      return (
        <Router>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={Gallery} />
              <Route path='/not-found' exact component={NotFound} />
              <Route path='/:details' exact component={Details} />
            </Switch>
          </div>
        </Router>
      );
    
  }

}




export default App;
