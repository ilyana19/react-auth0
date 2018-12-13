import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    );
  }
}

export default App;
