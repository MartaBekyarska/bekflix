import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details';
import Gallery from './Gallery';
import NotFound from './NotFound';

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
