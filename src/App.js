import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Auth from "./Auth/Auth";

import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile';
import Callback from './components/Callback';

class App extends Component {
  constructor(props) {
    super(props)
    this.auth = new Auth(this.props.history)
  }

  render() {
    return (
      <div>
        <Nav auth={this.auth} />

        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    );
  }
}

export default App;
