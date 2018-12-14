import React, { Component } from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import Auth from "./Auth/Auth";

import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile';
import Callback from './components/Callback';
import Public from './components/Public';
import Private from './components/Private';
import Courses from './components/Courses';
import PrivateRoute from './components/PrivateRoute';
import AuthContext from "./components/AuthContext";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false
    }
  }

  componentDidMount() {
    this.state.auth.renewToken(() =>
      this.setState({tokenRenewalComplete: true})
    )
  }

  render() {
    const {auth} = this.state
    // show loading message until the token renewal check is completed.
    if (!this.state.tokenRenewalComplete) return "Loading...";
    return (
      <AuthContext.Provider value={auth}>
        <Nav auth={auth} />

        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={auth} {...props} />}
          />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/private" component={Private} />
          <PrivateRoute
            path="/courses"
            component={Courses}
            scopes={["read:courses"]}
          />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
