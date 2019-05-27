import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import login from './components/Login';
import PageNotFound from './components/NotFoundComponent';
import Navbar from './components/Navbar';
import home from './components/home';

const history = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/Login" component={login} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
