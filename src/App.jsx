import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createBrowserHistory from './services/history';
import PageNotFound from './components/NotFoundComponent';
import home from './components/home/HomeComponent';
import PasswordResetForm from './views/password_reset/PasswordResetContainer';
import passwordResetConfirm from './views/password_reset/PasswordResetConfirmContainer';
// eslint-disable-next-line import/no-named-as-default
import DummyPost from './components/DummyPosts/DummyPosts';
import Profile from './views/profiles/ViewProfile';
import NavigationBar from './views/navigationbar/NavigationBarContainer';

const history = createBrowserHistory;
export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavigationBar />
            <br />
            <br />
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
              <Route exact path="/reset" component={PasswordResetForm} />
              <Route path="/resetconfirm/:token" component={passwordResetConfirm} /> 
              <Route exact path="/dummyposts" component={DummyPost} />
              <Route exact path="/Profile" component={Profile} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
        <ToastContainer />
      </div>
    );
  }
}
