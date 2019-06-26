import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import SearchPageContainer from './views/search/SearchPageContainer';
import ViewUserProfile from './views/profiles/OtheUserContainer';
import VerifyAccount from './views/Verifyaccount/VerifyAccountContainer';
import appAction from './redux/actions/app.action';
import ReportContainer from './views/Report/ReportContainer';
import ReportsContainer from './views/Report/ReportsContainer';

const history = createBrowserHistory;
class App extends Component {
  static propTypes = {
    action:PropTypes.func.isRequired
  };
  componentDidMount() {
    const { action } = this.props;
    action();
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavigationBar history={history} />
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
              <Route exact path="/myProfile/:profile" component={Profile} />
              <Route exact path="/postarticle" component={postfrom} />
              <Route exact path="/post/:slug" component={singlepost} />
              <Route exact path="/posts" component={postsfeed} />
              <Route exact path="/edit/:slug" component={editarticle} />
              <Route exact path="/search-page" component={SearchPageContainer} />
              <Route exact path="/profile/:profile" component={ViewUserProfile} />
              <Route exact path="/report/:slug" component={ReportContainer} />
              <Route exact path="/reports" component={ReportsContainer}   />
              <Route exact path="/api/users/activate/:token" component={VerifyAccount} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { action: appAction })(App);
