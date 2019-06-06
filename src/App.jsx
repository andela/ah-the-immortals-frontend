import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PageNotFound from './components/NotFoundComponent';
import home from './views/home/HomeContainer';
import Login from './components/Login';
import PasswordResetForm from './views/password_reset/PasswordResetContainer';
import passwordResetConfirm from './views/password_reset/PasswordResetConfirmContainer';

const history = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <ToastContainer 
              position="top-center"
              autoClose={5000}
              hideProgressBar
              closeOnClick
              draggable
              pauseOnHover
            />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/reset" component={PasswordResetForm} />
              <Route path="/resetconfirm/:token" component={passwordResetConfirm} /> 
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
