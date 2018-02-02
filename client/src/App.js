import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage.js';
import { Saved } from './pages/Saved/Saved.js';
import { NoMatch } from './pages/NoMatch/NoMatch.js';
import { Nav } from './components/Nav/Nav.js';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/saved" exact component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
