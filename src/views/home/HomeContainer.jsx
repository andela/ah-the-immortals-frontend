import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Footer from '../../components/home/HomeFooter';
import Navbar from '../../components/home/HomeNavBar';
import HomePage from '../../components/home/HomeInfo';
import signUpAction from '../../redux/actions/SignUp.action';
import signInAction from '../../redux/actions/SignIn.action';
import { facebookAuth, googleAuth, twitterAuth } from '../../redux/actions/SocialAuth.action';

class Home extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    signupdata: PropTypes.object.isRequired,
    signInAction: PropTypes.func.isRequired,
    facebookAuth: PropTypes.func.isRequired,
    googleAuth: PropTypes.func.isRequired,
    twitterAuth: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    signindata: PropTypes.object.isRequired
  };
  state = {
    show: false,
    signInShow: false,
    errorShow: {},
    signInError:false
  };
  closeModal = () => {
    this.setState({
      show: false,
      signInShow: false,
      errorShow: {},
      signInError:false
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
    toast.dismiss(1);
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
      signInError:false
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
      const { signupdata, history } = this.props;
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
        history.push('/dummyposts');
      }
    }
  };
  handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { signInAction } = this.props;
    await signInAction(this.state);
    // istanbul ignore next
    this.setState({
      signInError:true
    });
    // istanbul ignore next
    const { signindata, history } = this.props;
    // istanbul ignore next
    if (signindata.user.email) {
      this.setState({
        signInShow: false
      });
      history.push('/dummyposts');
    }
  };
  handleSignUpLink=(e)=>{
    e.preventDefault();
    this.setState({
      show:true,
      signInShow:false,
    });
  } 
  handleFacebook = async (e) => {
    e.preventDefault();
    const { facebookAuth: facebook, history } = this.props;
    await facebook();
    this.setState({
      show: false,
      signInShow: false
    });
    history.push('/dummyposts');
  }
  handleGoogle = async (e) => {
    e.preventDefault();
    const { googleAuth: google, history } = this.props;
    await google();
    this.setState({
      show: false,
      signInShow: false
    });
    history.push('/dummyposts');
  }
  handleTwitter = async (e) => {
    e.preventDefault();
    const { twitterAuth: twitter, history } = this.props;
    await twitter();
    this.setState({
      show: false,
      signInShow: false
    });
    history.push('/dummyposts');
  }
  render = () => {
    const { show, signInShow, errorShow, signInError} = this.state;
    const { signindata } = this.props;
    const facebook = this.handleFacebook;
    const google = this.handleGoogle;
    const twitter = this.handleTwitter;
    const { signupdata } = this.props;
    return (
      <div>
        <Navbar showModal={this.showModal} signInShow={this.handleSignInShow} />
        <Container className="homepage">
          <HomePage
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
          />
        </Container>
        <Footer />
      </div>
    );
  };
}
const mapStateToProps = ({ signup, signin }) => {
  return {
    signupdata: signup,
    signindata: signin
  };
};

export default connect(mapStateToProps, { signup: signUpAction, signInAction, facebookAuth, twitterAuth, googleAuth })(Home);
