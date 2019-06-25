import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import SignedOutLinks from '../../components/navbar/signedOutLinks';
import SignedInLinks from '../../components/navbar/signedInLinks';
import signUpAction from '../../redux/actions/SignUp.action';
import { signInAction as logInAction, logoutAction } from '../../redux/actions/SignIn.action';
import isLoggedIn from '../../services/checkAuthentication';
import { facebookAuth, googleAuth, twitterAuth } from '../../redux/actions/SocialAuth.action';
import RenderedLinks from '../../components/navbar/renderedLinks';
import tokenDecoded from '../../services/tokenDecoder';
import promptAction from '../../redux/actions/Prompt.action';
import { fetchNotification, fetchUnread, clearNotify } from '../../redux/actions/notifications.action';

class NavigationBar extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    signupdata: PropTypes.object.isRequired,
    signInAction: PropTypes.func.isRequired,
    facebookAuth: PropTypes.func.isRequired,
    googleAuth: PropTypes.func.isRequired,
    twitterAuth: PropTypes.func.isRequired,
    signindata: PropTypes.object.isRequired,
    logoutAction: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired,
    history:PropTypes.object.isRequired,
    promptShow:PropTypes.func.isRequired,
    fetchNotification: PropTypes.func.isRequired,
    notifications: PropTypes.object.isRequired,
    fetchUnread: PropTypes.func.isRequired,
    unreadNotifications: PropTypes.object.isRequired,
    clearNotify: PropTypes.func.isRequired,
  };
  state = {
    show: false,
    signInShow: false,
    errorShow: {},
    signInError: false,
    slug:undefined
  };
  static getDerivedStateFromProps = (props, state) => (props.prompt.show == true) ?
    {
      signInShow:true,
      slug:props.prompt.slug
    } : state
  closeModal = () => {
    const {promptShow}=this.props;
    promptShow(false);
    this.setState({
      show: false,
      signInShow: false,
      errorShow: {},
      signInError: false
    });
    toast.dismiss(1);
  };
  showModal = (e) => {
    e.preventDefault();
    this.setState({
      show: true,
      errorShow: {}
    });
    toast.dismiss(1);
  };
  handleSignInShow = (e) => {
    e.preventDefault();
    this.setState({
      signInShow: true,
    });
  };
  handleChange = (e) => {
    e.preventDefault();
    const { errorShow } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      errorShow: {
        ...errorShow,
        [e.target.name]: false
      },
      signInError: false
    });
    toast.dismiss(1);
  };
  handleSignInLink = (e) => {
    e.preventDefault();
    this.setState({
      show: false,
      signInShow: true
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, password_confirm } = this.state;
    const { signup } = this.props;
    if (password != password_confirm) {
      // istanbul ignore next
      this.setState({
        errorShow: {
          password: true,
          password_confirm: true,
          passwdError: 'The passwords do not match'
        }
      });
    } else {
      await signup(this.state);
      // istanbul ignore next
      const { signupdata } = this.props;
      // istanbul ignore next
      this.setState({
        errorShow: {
          email: true,
          username: true,
          password: true,
          password_confirm: true
        }
      });
      // istanbul ignore next
      if (signupdata.user.email) {
        this.setState({
          show: false
        });
        localStorage.setItem('token', signupdata.user.token);
        localStorage.setItem('username', signupdata.user.username);
      }
    }
  };
  handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { signInAction } = this.props;
    await signInAction(this.state);
    // istanbul ignore next
    this.setState({
      signInError: true
    });
    // istanbul ignore next
    const { signindata } = this.props;
    // istanbul ignore next
    if (signindata.user.email) {
      this.setState({
        signInShow: false
      });
    }
  };
  handleSignUpLink = (e) => {
    e.preventDefault();
    this.setState({
      show: true,
      signInShow: false,
    });
  }
  handleFacebook = async (e) => {
    e.preventDefault();
    const { facebookAuth: facebook } = this.props;
    await facebook();
    this.setState({
      show: false,
      signInShow: false
    });
  }
  handleGoogle = async (e) => {
    e.preventDefault();
    const { googleAuth: google } = this.props;
    await google();
    this.setState({
      show: false,
      signInShow: false
    });
  }
  handleTwitter = async (e) => {
    e.preventDefault();
    const { twitterAuth: twitter } = this.props;
    await twitter();
    this.setState({
      show: false,
      signInShow: false
    });
  };
  handleLogout = (e) => {
    e.preventDefault();
    const { logoutAction } = this.props;
    logoutAction();
  };
  showNotifications = (e) => {
    e.preventDefault();
    const { fetchNotification: getNotify } = this.props;
    getNotify();
  };
  componentDidMount() {
    const { fetchUnread: getUnread } = this.props;
    getUnread();
  }
  handleDel = (e) => {
    e.preventDefault();
    const { clearNotify: clearNotes } = this.props;
    clearNotes();
  };
  render() {
    const { show, signInShow, errorShow, signInError } = this.state;
    const { signindata, signupdata, history, result, unreadNotifications: { unreadNotifications }, notifications: { notifications } } = this.props;
    const facebook = this.handleFacebook;
    const google = this.handleGoogle;
    const twitter = this.handleTwitter;
    const isAuthenticated = signindata.isAuthenticated || signupdata.isAuthenticated || isLoggedIn();
    const links = isAuthenticated ? <SignedInLinks handleClear={this.handleDel} unread={unreadNotifications.length} notifications={notifications} handleClick={this.showNotifications} handleLogout={this.handleLogout} username={signindata.user.username || signupdata.user.username || tokenDecoded()} /> : (
      <SignedOutLinks
        showModal={this.showModal}
        closeModal={this.closeModal}
        show={show}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleSignInSubmit={this.handleSignInSubmit}
        signInShow={signInShow}
        facebook={facebook}
        google={google}
        twitter={twitter}
        handleSignInLink={this.handleSignInLink}
        signupdata={signupdata}
        errorShow={errorShow}
        handleSignUpLink={this.handleSignUpLink}
        signindata={signindata}
        signInError={signInError}
        handleSignInShow={this.handleSignInShow}
      />
    );
    return (
      <RenderedLinks links={links} history={history} result={result} />
    );
  }
}
const mapStateToProps = ({ signup, signin, search, prompt, notify }) => {
  return {
    signupdata: signup, signindata: signin,
    result: search, prompt, notifications: notify, unreadNotifications: notify,
  };
};
export default connect(mapStateToProps, {signup: signUpAction, signInAction:logInAction, facebookAuth, twitterAuth,
  googleAuth, logoutAction, promptShow: promptAction, fetchNotification, fetchUnread, clearNotify
})(withRouter(NavigationBar));
