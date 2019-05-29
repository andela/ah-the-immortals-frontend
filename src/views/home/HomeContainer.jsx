import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
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
    history: PropTypes.object.isRequired
  };
  state = {
    show: false,
    signInShow: false
  };
  closeModal = () => {
    this.setState({
      show: false,
      signInShow: false
    });
    toast.dismiss(1);
  };
  showModal = (e) => {
    e.preventDefault();
    this.setState({
      show: true
    });
    toast.dismiss(1);
  };
  handleSignInShow = (e) => {
    e.preventDefault();
    this.setState({
      signInShow: true
    });
    toast.dismiss(1);
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    toast.dismiss(1);
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, password_confirm } = this.state;
    const { signup } = this.props;

    if (password != password_confirm) {
      // istanbul ignore next
      toast.error('The passwords do not match', {
        position: toast.POSITION.TOP_CENTER,
        toastId: 1
      });
    } else {
      await signup(this.state);
      // istanbul ignore next
      const { signupdata } = this.props;
      // istanbul ignore next
      if (signupdata.user.email) {
        this.setState({
          show: false
        });
      }
    }
  };
  handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { signInAction } = this.props;
    await signInAction(this.state);
    // istanbul ignore next
    const { signindata, history } = this.props;
    // istanbul ignore next
    if(signindata.user.email){
      this.setState({
        signInShow: false
      });
      history.push('/dummyposts');
    }
    
  };  
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
    const { show, signInShow } = this.state;
    const facebook = this.handleFacebook;
    const google = this.handleGoogle;
    const twitter = this.handleTwitter;
    return (
      <div>
        <ToastContainer />
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
