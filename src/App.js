import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" class="brand-logo right">NYT Scrubber</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#" className="active">but</a></li>
              <li><a href="#">i'm</a></li>
              <li><a href="#">here</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default App;
