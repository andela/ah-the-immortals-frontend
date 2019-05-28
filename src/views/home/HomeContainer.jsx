import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../components/home/homeFooter';
import Navbar from '../../components/home/homeNavbar';
import HomePage from '../../components/home/homeInfo';
import signUpAction from '../../redux/actions/SignUp.action';

class Home extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    signupdata: PropTypes.object.isRequired
  };

  state = {
    show: false,
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
    toast.dismiss(1);
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState({
      show: true,
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

  render = () => {
    let { show } = this.state;
    return (
      <div>
        <ToastContainer />
        <Navbar showModal={this.showModal} />
        <Container className="homepage">
          <HomePage
            showModal={this.showModal}
            closeModal={this.closeModal}
            show={show}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ signup }) => {
  return {
    signupdata: signup
  };
};

export default connect(mapStateToProps, { signup: signUpAction })(Home);
