import React, { Component } from 'react';
// import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>

        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
