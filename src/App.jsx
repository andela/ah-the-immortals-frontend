import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createBrowserHistory from './services/history';
import PageNotFound from './components/NotFoundComponent';
import home from './components/home/HomeComponent';
import PasswordResetForm from './views/password_reset/PasswordResetContainer';
import passwordResetConfirm from './views/password_reset/PasswordResetConfirmContainer';
import Profile from './views/profiles/ViewProfile';
import NavigationBar from './views/navigationbar/NavigationBarContainer';
import postfrom from './views/Articles/PostForm';
import postsfeed from './views/Articles/Posts';
import singlepost from './views/Article/post';
import editarticle from './views/EditArticle/EditArticle';
import Footer from './components/home/HomeFooter';


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
              <Route exact path="/Profile/:username" component={Profile} />
              <Route exact path="/postarticle" component={postfrom} />
              <Route exact path="/post/:slug" component={singlepost} />
              <Route exact path="/posts" component={postsfeed} />
              <Route exact path="/edit/:slug" component={editarticle} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
