import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import login from './components/Login';
import PageNotFound from './components/NotFoundComponent';
import home from './views/home/HomeContainer';

const history = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
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
