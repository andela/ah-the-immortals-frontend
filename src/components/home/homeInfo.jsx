import React from 'react';
import { Container, Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SignupModal from '../signup/SignupComponent';
import homepageimage from '../../services/images/homepage.png';

const HomePage = ({ showModal, show, closeModal, handleChange, handleSubmit }) => {
  return (
    <div className="columns">
      <Row>
        <Col className="col">
          <Container>
            <h1 className="homepage">
              Welcome to your articles Community
            </h1>
            <br />
            <Form>
              <FormControl type="text" placeholder="&#xF002;  Search for articles" className="font-awesome" />
            </Form>
          </Container>
          <Container className="home">
            <p><b>Who is Authors Haven for?</b></p>
            <p>Anyone looking to inspire and be inspired by ideas</p>
            <p>Join fellow authors and enthusiasts in Authors Haven</p>
            <Button
              variant="primary"
              onClick={showModal}
            >
              Get Started
            </Button>
            <SignupModal
              show={show}
              closeModal={closeModal}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Container>
        </Col>
        <Col className="homepageimg">
          <img src={homepageimage} alt="" width="450" height="400" />
        </Col>
      </Row>
    </div>
  );
};

HomePage.propTypes = {
  showModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default HomePage;
